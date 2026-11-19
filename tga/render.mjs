// Renders every post in content.json into 1080x1350 PNG carousel slides.
// Usage: node tga/render.mjs [post-id]   (omit id to render everything)
import { createRequire } from 'node:module'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const { chromium } = createRequire(import.meta.url)('playwright')
const here = dirname(fileURLToPath(import.meta.url))
const { handle, posts } = JSON.parse(readFileSync(join(here, 'content.json'), 'utf8'))
const outRoot = join(here, 'out')
const only = process.argv[2]

const font = (file) =>
  `data:font/ttf;base64,${readFileSync(resolve(here, 'fonts', file)).toString('base64')}`
const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const css = `
@font-face{font-family:'Playfair';font-weight:700;src:url(${font('playfair-1.ttf')})}
@font-face{font-family:'Playfair';font-weight:900;src:url(${font('playfair-2.ttf')})}
:root{--green:#0f3d2e;--green2:#165240;--cream:#f5efe0;--gold:#c9a24b;--ink:#12201a}
*{box-sizing:border-box;margin:0}
body{width:1080px;height:1350px;font-family:'Inter',sans-serif;overflow:hidden}
.slide{position:relative;width:1080px;height:1350px;padding:110px 100px;display:flex;flex-direction:column;justify-content:center}
.dark{background:radial-gradient(circle at 20% 10%,var(--green2),var(--green));color:var(--cream)}
.light{background:var(--cream);color:var(--ink)}
.frame{position:absolute;inset:36px;border:3px solid var(--gold);border-radius:6px;pointer-events:none}
.kicker{font-size:30px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:36px}
h1{font-family:'Playfair',serif;font-weight:900;line-height:1.08;letter-spacing:-.01em}
.body{margin-top:44px;font-size:42px;line-height:1.4;opacity:.92;max-width:840px}
.brand{position:absolute;bottom:80px;left:100px;right:100px;display:flex;justify-content:space-between;font-size:26px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;opacity:.75}
.crest{display:flex;align-items:center;gap:20px;margin-bottom:60px}
.crest span{display:inline-flex;width:92px;height:92px;border:4px solid var(--gold);border-radius:50%;align-items:center;justify-content:center;font-family:'Playfair',serif;font-weight:900;font-size:36px;color:var(--gold)}
.crest em{font-style:normal;font-size:26px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
`

function slideHtml(slide, index, total) {
  const cover = index === 0
  const last = index === total - 1 && total > 1
  const theme = cover || last ? 'dark' : 'light'
  const size = cover ? 112 : slide.headline.length > 60 ? 62 : slide.headline.length > 40 ? 76 : 92
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
<div class="slide ${theme}"><div class="frame"></div>
${cover ? `<div class="crest"><span>TGA</span><em>Trash Golf Association</em></div>` : ''}
<div class="kicker">${esc(slide.kicker)}</div>
<h1 style="font-size:${size}px">${esc(slide.headline)}</h1>
${slide.body ? `<p class="body">${esc(slide.body)}</p>` : ''}
<div class="brand"><span>${esc(handle)}</span><span>${index + 1} / ${total}</span></div>
</div></body></html>`
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } })
const queue = []

for (const post of posts) {
  if (only && post.id !== only) continue
  const dir = join(outRoot, post.id)
  mkdirSync(dir, { recursive: true })
  for (let i = 0; i < post.slides.length; i++) {
    await page.setContent(slideHtml(post.slides[i], i, post.slides.length))
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: join(dir, `slide-${i + 1}.png`) })
  }
  writeFileSync(join(dir, 'caption.txt'), `${post.caption}\n\n${post.hashtags}\n`)
  queue.push(post)
  console.log(`rendered ${post.id} (${post.slides.length} slides)`)
}

// Posting schedule: one post per day starting tomorrow.
const start = new Date()
start.setDate(start.getDate() + 1)
const rows = queue.map((p, i) => {
  const d = new Date(start)
  d.setDate(start.getDate() + i)
  return `| ${d.toISOString().slice(0, 10)} | ${p.id} | ${p.slides.length} |`
})
writeFileSync(
  join(outRoot, 'schedule.md'),
  `# Posting schedule\n\n| Date | Post | Slides |\n|---|---|---|\n${rows.join('\n')}\n`,
)

await browser.close()
