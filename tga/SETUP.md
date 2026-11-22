# TGA auto-posting: setup guide

A GitHub Action posts one carousel per day to Instagram from `content.json`.
Everything in the code is done. The steps below need **you**, because they
involve logging in to Meta and GitHub, and a token must never be pasted into chat
or committed to the repo.

> Meta renames menus fairly often. If a label below doesn't match exactly,
> look for the closest one. The official guide is "Instagram API with Instagram Login".

## 1. Make sure the account is a Creator account
Instagram app → Settings → **Account type and tools** → switch to **Creator**.
No Facebook Page is needed for this route.

## 2. Create a Meta developer app and get a token
1. Go to developers.facebook.com, log in, and register as a developer if asked.
2. **Create app**. Choose the use case for managing **Instagram** content
   (app type *Business* if asked).
3. In the app, open **Instagram → API setup with Instagram login**.
4. Add your `trashgolfassociation` account (as a tester / "Add account") and accept the
   invite in the Instagram app (Settings → Website permissions → Apps and websites).
5. Click **Generate token** for that account. Make sure these permissions are included:
   - `instagram_business_basic`
   - `instagram_business_content_publish`
6. Copy the token. It's valid for **60 days** (see "Keeping it alive" below).

You do **not** need App Review. While the app is in development mode, it can post
to accounts you own or have added as testers.

## 3. Store the token as a GitHub secret
Repo → **Settings → Secrets and variables → Actions → New repository secret**
- Name: `IG_ACCESS_TOKEN`
- Value: the token

## 4. Host the images (important)
Instagram downloads each image from a **public URL**. This repo is currently
**private**, so the images aren't reachable and the posting job will stop with a clear
error. Choose one:

- **Make this repo public** (Settings → General → Danger zone → Change visibility).
  The repo contains no secrets: the token lives only in GitHub Secrets. The images and
  captions are public anyway once posted. This is the simplest option.
- **Or** put the `tga/` folder and `.github/workflows/tga-post.yml` in a new
  public repo and add the secret there.

Images are served from `raw.githubusercontent.com/<owner>/<repo>/<branch>/tga/media/...`.
To use another host, set `IMAGE_BASE_URL` in the workflow.

## 5. Merge to `main`
GitHub only runs scheduled workflows from the **default branch**. Merge the
`claude/wonderful-maxwell-bhhrxo` branch into `main`.

## 6. Test before going live
Repo → **Actions → TGA daily post → Run workflow**
1. Run with mode **check**. It verifies the token and that images are reachable, and posts nothing.
2. Run with mode **post** once, and confirm the first carousel shows up on the account.
3. After that it posts daily on its own.

## Daily operation
- Posts go out in the order of `content.json`, one per day at the time in the workflow's `cron` line (UTC).
- `tga/state.json` records what has been posted. The bot commits it after each post.
- If a run fails, nothing is recorded, and the next run retries the same post. GitHub emails you on workflow failures.
- When all posts are used, the job logs "queue is empty". Add new posts to `content.json`, then run `npm run tga:render` and commit the new `tga/media` images.

## Keeping it alive (token expiry)
Tokens last 60 days. Refresh before then (the token must be at least 24 hours old):

```
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=<YOUR_TOKEN>"
```

Put the new token in the `IG_ACCESS_TOKEN` secret and set a calendar reminder for
about 50 days out. If it expires, the job fails and you get an email.

## Local commands
```
npm install
npx playwright install chromium   # one time, for rendering images
npm run tga:render                # rebuild all images from content.json
npm run tga:dry                   # preview the next post
IG_ACCESS_TOKEN=... IMAGE_BASE_URL=... npm run tga:check
```

## Instagram limits worth knowing
- Images must be **JPEG** (the renderer already outputs JPEG).
- Carousels: 2 to 10 slides. All current posts fit.
- The API allows up to 100 posted items per account per 24 hours.
