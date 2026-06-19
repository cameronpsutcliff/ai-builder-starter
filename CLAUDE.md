# Instructions for Claude (or any AI agent)

You are helping the owner of this repo turn a **portfolio starter template** into
**their own personal website**. The design, fonts, theme, and layout are done.
Your job is to replace placeholder content with the owner's real content, then
verify the site still builds and looks right.

## What this project is

A small React + Vite + TypeScript single-page site with a light/dark theme, an
animated particle background, three Google Fonts, and a clean component shell.
All of the owner's *content* lives in plain data files, not in code.

## Start here - the only two files most people need to edit

1. **`src/content/profile.ts`** - name, tagline, intro, About text, skills, social links.
2. **`src/content/projects.ts`** - one entry per project. Add, remove, reorder freely.

Editing those two files updates the home page, the About page, the Work grid, and
every project detail page automatically. **Do not rebuild the components to add
content; just edit the data.**

## Your workflow

1. **Interview the owner first.** Ask for: their name, a one-line tagline, a short
   intro, 1-3 projects (title, what it was, what they did, a link if any), their
   skills, and their social links (email, GitHub, LinkedIn, X, Instagram, website).
   Ask in small batches; don't demand everything at once.
2. **Fill in `profile.ts` and `projects.ts`** with their answers. Keep the writing
   in *their* voice - concrete and human, not marketing fluff.
3. **Update `index.html`**: the `<title>`, the `description` meta, and the Open
   Graph (`og:*`) tags - replace `[Your Name]` everywhere.
4. **Swap the favicon** (`public/favicon.svg`): change the `JS` initials, or replace
   the file with the owner's own mark.
5. **Run it and check** (see below). Fix anything that breaks. Show the owner.

## Running and verifying (do this - don't ask the owner to)

```bash
npm install        # first time only
npm run dev        # local dev server, hot-reloads as you edit
npm run build      # MUST pass before you call the work done (runs tsc + vite build)
```

`npm run build` is the gate. If it fails, read the error, fix it, run again.
Common cause: a typo in `profile.ts` / `projects.ts` (a missing comma or quote).

## Going further (only if the owner asks)

- **Re-skin the colors:** brand accents are in `src/index.css` (the `--color-primary-*`
  ramp and the `--cyan` / `--purple` accents). Light and dark *surface* colors live in
  `packages/abyssal/src/abyssal.css`. Change values there; the whole site follows.
- **Change fonts:** edit the `<link>` in `index.html` AND the `--font-*` lines in
  `src/index.css`. Keep both in sync.
- **Add a new page:** create a file in `src/pages/`, then add a `<Route>` for it in
  `src/App.tsx` and a nav link in `src/components/SiteHeader.tsx`.
- **Add a new content type** (e.g. writing/blog): copy the pattern in
  `src/content/projects.ts` + `src/pages/Work.tsx` - a data file plus a page that maps over it.

## Rules

- Keep the data-driven pattern. Content goes in `src/content/`, never hard-coded into pages.
- Never commit secrets. There are no API keys in this project and it doesn't need any.
- The `packages/abyssal/` folder is the design system - you usually don't need to touch it.
- When you're done, the site should `npm run build` cleanly and every placeholder
  ("Your Name", "first-project", lorem text) should be gone.

## Deploying (when the content is ready)

This is a static Vite app. `npm run build` outputs to `dist/`. It deploys as-is to
Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static host. Recommend
**Vercel** or **Netlify** to the owner - connect the GitHub repo, framework
preset "Vite", and it ships. No server, no database, no environment variables.
