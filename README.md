# Personal Brand & AI Builder Starter

A clean, modern personal website builder (`firstnamelastname.com` style) built with React + Vite + TypeScript, light/dark themes, and an interactive project lab.

This starter is designed around three goals:
- **A) Get your site on:** Boot your site locally in seconds so you can watch it update live in your browser, then deploy it for free to your own domain.
- **B) Build your `firstnamelastname.com` personal brand:** Shape who you are, what you do, what you care about, and what you are focused on right now (`src/content/profile.ts`).
- **C) Experience the AI "Aha!" moment:** Team up with your AI coding agent to brainstorm around things you are passionate about, then **co-build a working interactive tool, calculator, or mini-app hosted right on your site** (`src/lab/`).

---

## Quick Start: Let Your AI Agent Drive

Open this folder in **Claude Code**, **Cursor**, **Codex**, or any AI coding tool and paste this kickoff prompt:

> Read `CLAUDE.md`. First, make sure packages are installed and the local dev server is running so I can watch my site update live in my browser. Then guide me through building my personal site (`firstnamelastname.com`) step by step:
> 1. Brainstorm with me on what I want this site to be, what content I should host here, and how to shape my personal brand in `src/content/profile.ts` (ask me 2-3 questions at a time).
> 2. Once my profile is up, instruct me to think about things I am passionate about outside of a standard resume (hobbies, sports, music, cooking, fitness, finance, games, or daily curiosities) so we can brainstorm 3 interactive project ideas together.
> 3. Help me pick our favorite idea and co-build it as a live interactive component in `src/lab/` hosted directly on my site!

Want prompts for each individual step? Check out **[`PROMPTS.md`](./PROMPTS.md)** or copy them directly from the on-screen **Starter Launchpad** when you open `http://localhost:5173`.

---

## Step-by-Step Prompts for Your Agent

### 1. Shape Your Personal Brand & Content (Goal A + B)
> Read `CLAUDE.md`. Start the local dev server so I can open `http://localhost:5173` and watch my site update live. Then brainstorm with me in small steps on what I want my `firstnamelastname.com` site to be, what kind of content I should host here, my 3 personal brand pillars, and what I am focused on right now. Update `src/content/profile.ts`, `index.html`, and `public/favicon.svg` as we talk.

### 2. Brainstorm Project Ideas From Your Passions (Goal C - Part 1)
> I want to host something interactive and memorable on my site, and I want us to brainstorm it together. Instruct me to think about things I am passionate about in real life: hobbies I nerd out on, sports, cooking, coffee, lifting, music, gaming, outdoor gear, or personal finance. Ask me 2 or 3 quick questions to uncover what I care about, then pitch 3 concrete interactive mini-apps, calculators, or visualizers we can build together right now and host on my site.

### 3. Co-Build & Host It Live on Your Site (Goal C - Part 2)
> Let's build our favorite idea from our brainstorm and host it live on my site! Create an interactive React component for it in `src/lab/`, register it in `src/lab/registry.tsx`, and wire it into `src/content/projects.ts` using `interactiveId` so it renders live on its project page. Build the first working version now and tell me where to click in my browser so we can test and iterate on it together.

---

## Run It Yourself (Optional)

If you want to run the terminal commands yourself (requires [Node.js](https://nodejs.org) 18+):

```bash
npm install     # one time
npm run dev     # starts http://localhost:5173 with live hot-reload
npm run build   # production check + static build into dist/
```

---

## What Is Inside

```text
CLAUDE.md               <- Playbook for Claude Code (4-stage guided collaboration)
AGENTS.md               <- Playbook pointer for Cursor, Codex, and other AI agents
PROMPTS.md              <- Full copy-paste prompt playbook for every stage
src/
  content/              <- YOUR CONTENT lives here
    profile.ts          <- Name, domain, tagline, pillars, /now focus, passions, links
    projects.ts         <- Projects, case studies, deep dives, and live interactive builds
    prompts.ts          <- Starter prompts displayed in the on-site Launchpad
  lab/                  <- INTERACTIVE BUILDS you and your AI agent create together
    registry.tsx        <- Connects components in src/lab/ to projects.ts via interactiveId
    PassionSparkDemo.tsx<- Live interactive Passion-to-Project Idea Lab (starter demo)
  pages/                <- Home, Work, ProjectDetail, About, 404
  components/           <- Header, Footer, ProjectCard, SocialLinks, StarterLaunchpad
  App.tsx               <- Routes + layout
  index.css             <- Fonts + brand accent colors
packages/abyssal/       <- Design system (light/dark theme, particle canvas, theme toggle)
index.html              <- Page title, Google Fonts, social-share tags
```

---

## Deploy to `firstnamelastname.com`

This is a static Vite site with zero server or database requirements:
1. Flip `starterMode: false` in `src/content/profile.ts` (hides the Starter Launchpad banner) and run `npm run build`.
2. Push your repo to **GitHub**.
3. Import the repo on **Vercel** or **Netlify** (free tier, "Vite" preset).
4. Add your custom `firstnamelastname.com` domain in the project's Domains settings.
