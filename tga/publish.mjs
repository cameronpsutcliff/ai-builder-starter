// Publishes the next unposted carousel from content.json to Instagram.
//
// Uses the "Instagram API with Instagram Login" (works for Creator and
// Business accounts, no Facebook Page required).
//
// Usage:
//   node tga/publish.mjs              publish the next unposted post
//   node tga/publish.mjs --dry-run    show what would be posted, call nothing
//   node tga/publish.mjs --id 03-slice-reasons   publish a specific post
//   node tga/publish.mjs --check      verify token + image URLs, post nothing
//
// Environment:
//   IG_ACCESS_TOKEN   (required) long-lived Instagram User access token
//   IG_USER_ID        (optional) looked up from the token if omitted
//   IMAGE_BASE_URL    public URL that serves tga/media (see tga/SETUP.md).
//                     Defaults to the raw.githubusercontent.com URL of this repo.
//   IG_API_BASE       override API host (used by the local test mock)
//   IG_API_VERSION    default v23.0
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const { posts } = JSON.parse(readFileSync(join(here, 'content.json'), 'utf8'))
const statePath = join(here, 'state.json')
const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : { posted: [] }

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const checkOnly = args.includes('--check')
const idArg = args.includes('--id') ? args[args.indexOf('--id') + 1] : undefined

const API = `${process.env.IG_API_BASE || 'https://graph.instagram.com'}/${process.env.IG_API_VERSION || 'v23.0'}`
const token = process.env.IG_ACCESS_TOKEN

const imageBase = (
  process.env.IMAGE_BASE_URL ||
  (process.env.GITHUB_REPOSITORY
    ? `https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/${process.env.GITHUB_REF_NAME || 'main'}/tga/media`
    : '')
).replace(/\/$/, '')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const fail = (msg) => {
  console.error(`✖ ${msg}`)
  process.exit(1)
}

async function api(path, { method = 'GET', params = {} } = {}) {
  const url = new URL(`${API}${path}`)
  const body = new URLSearchParams()
  const all = { ...params, access_token: token }
  if (method === 'GET') for (const [k, v] of Object.entries(all)) url.searchParams.set(k, v)
  else for (const [k, v] of Object.entries(all)) body.set(k, v)
  const res = await fetch(url, { method, body: method === 'GET' ? undefined : body })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.error) {
    const e = json.error || {}
    throw new Error(`${method} ${path} → ${res.status} ${e.message || JSON.stringify(json)}`)
  }
  return json
}

async function waitUntilReady(containerId) {
  for (let i = 0; i < 30; i++) {
    const { status_code, status } = await api(`/${containerId}`, { params: { fields: 'status_code,status' } })
    if (status_code === 'FINISHED') return
    if (status_code === 'ERROR' || status_code === 'EXPIRED') {
      throw new Error(`container ${containerId} failed: ${status_code} ${status || ''}`)
    }
    await sleep(2000)
  }
  throw new Error(`container ${containerId} not ready after 60s`)
}

function imageUrls(post) {
  return post.slides.map((_, i) => `${imageBase}/${post.id}/slide-${i + 1}.jpg`)
}

async function checkImages(urls) {
  for (const u of urls) {
    const res = await fetch(u, { method: 'HEAD' })
    const type = res.headers.get('content-type') || ''
    if (!res.ok || !type.includes('image/jpeg')) {
      fail(
        `Instagram can't fetch ${u} (HTTP ${res.status}, ${type || 'no content-type'}).\n` +
          `  Images must be on a PUBLIC URL as JPEG. A private GitHub repo will fail here.\n` +
          `  See tga/SETUP.md, step "Host the images".`,
      )
    }
  }
}

// ── pick the post ────────────────────────────────────────────────
const doneIds = new Set(state.posted.map((p) => p.id))
const post = idArg ? posts.find((p) => p.id === idArg) : posts.find((p) => !doneIds.has(p.id))
if (idArg && !post) fail(`No post with id "${idArg}"`)
if (!post && !checkOnly) {
  console.log('✔ Queue is empty: every post in content.json has been published. Add more posts!')
  process.exit(0)
}

const today = new Date().toISOString().slice(0, 10)
if (!dryRun && !checkOnly && !idArg && state.posted.some((p) => p.postedAt.slice(0, 10) === today)) {
  console.log(`✔ Already posted today (${today}). Nothing to do.`)
  process.exit(0)
}

const caption = post && `${post.caption}\n\n${post.hashtags}`
if (post) {
  console.log(`Next post: ${post.id} (${post.slides.length} slides)`)
  if (dryRun) {
    console.log('\n--- caption ---\n' + caption + '\n---------------')
    console.log(imageBase ? imageUrls(post).join('\n') : '(set IMAGE_BASE_URL to see image URLs)')
    console.log('\nDry run: nothing was sent.')
    process.exit(0)
  }
}

if (!token) fail('IG_ACCESS_TOKEN is not set.')
if (!imageBase) fail('IMAGE_BASE_URL is not set (and GITHUB_REPOSITORY is unavailable).')

const me = await api('/me', { params: { fields: 'user_id,username' } }).catch((e) => fail(`Token check failed: ${e.message}`))
const igUserId = process.env.IG_USER_ID || me.user_id || me.id
console.log(`Authenticated as @${me.username} (${igUserId})`)

const first = post || posts[0]
await checkImages(imageUrls(first))
console.log('✔ Image URLs are publicly reachable')
if (checkOnly) {
  console.log('✔ Check passed. Ready to post.')
  process.exit(0)
}

// ── publish ──────────────────────────────────────────────────────
const urls = imageUrls(post)
if (urls.length < 2 || urls.length > 10) fail(`Carousels need 2-10 slides (got ${urls.length}).`)

const children = []
for (const url of urls) {
  const { id } = await api(`/${igUserId}/media`, {
    method: 'POST',
    params: { image_url: url, is_carousel_item: 'true' },
  })
  children.push(id)
}
for (const id of children) await waitUntilReady(id)

const { id: containerId } = await api(`/${igUserId}/media`, {
  method: 'POST',
  params: { media_type: 'CAROUSEL', children: children.join(','), caption },
})
await waitUntilReady(containerId)

const { id: mediaId } = await api(`/${igUserId}/media_publish`, {
  method: 'POST',
  params: { creation_id: containerId },
})

state.posted.push({ id: post.id, mediaId, postedAt: new Date().toISOString() })
writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n')
console.log(`✔ Published ${post.id} → media ${mediaId}`)
