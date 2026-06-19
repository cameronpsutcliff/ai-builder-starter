# Portfolio Starter

A clean, modern personal-site template: React + Vite + TypeScript, light/dark
theme, animated background, nice typography. The look and feel is done - you just
add your content.

## The easy way: let Claude do it

Open this folder in **Claude Code** (or Cursor, or any AI coding tool) and say:

> Read CLAUDE.md and help me turn this into my personal site.

It will interview you, fill in your content, and verify the site builds. That's
what `CLAUDE.md` in this folder is for.

## The manual way

You only need to edit two files:

| File | What's in it |
|------|--------------|
| `src/content/profile.ts` | Your name, tagline, intro, About text, skills, social links |
| `src/content/projects.ts` | Your projects (one entry each) |

Then update `index.html` (title + description) and `public/favicon.svg` (your initials).

## Run it

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install     # one time
npm run dev      # http://localhost:5173 - edit files and watch it update
npm run build    # production build into dist/
```

## Deploy

It's a static site. After `npm run build`, the `dist/` folder works on any static
host. Easiest path: push to GitHub, import the repo on **Vercel** or **Netlify**,
pick the "Vite" preset, done. No server or database needed.

## What's inside

```
src/
  content/        ← YOUR CONTENT lives here (edit these)
    profile.ts
    projects.ts
  pages/          ← Home, Work, project detail, About, 404
  components/     ← header, footer, cards, social links
  App.tsx         ← routes + layout
  index.css       ← fonts + brand colors
packages/abyssal/ ← the design system (theme, particles, toggle)
index.html        ← page title, fonts, social-share tags
```

## Make it yours (optional)

- **Colors:** `src/index.css` (brand accents) and `packages/abyssal/src/abyssal.css` (light/dark surfaces).
- **Fonts:** the `<link>` in `index.html` plus the `--font-*` lines in `src/index.css`.
- **Theme toggle:** top-right of the header, or press `t` anywhere.

---

Built from a template. Have fun with it.
