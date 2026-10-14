# Your AI Collaboration Prompt Playbook

This repo is designed to be built **with** an AI coding agent (Claude Code, Cursor, Codex, or Windsurf).

Instead of editing files line-by-line by yourself, copy and paste the prompts below into your AI agent. They are written to push both you and your agent to:
1. **Get your site running right away** so you can watch every change live in your browser.
2. **Brainstorm your `firstnamelastname.com` personal brand** and decide what content belongs on your corner of the internet.
3. **Turn your real-life passions into working software** that you co-build with your agent and host right on your site.

---

## Option 1: The All-in-One Kickoff Prompt

Paste this single prompt to start the full guided experience from scratch:

> Read `CLAUDE.md`. First, make sure packages are installed and the local dev server is running so I can watch my site update live in my browser. Then guide me through building my personal site (`firstnamelastname.com`) step by step:
> 1. Brainstorm with me on what I want this site to be, what content I should host here, and how to shape my personal brand in `src/content/profile.ts` (ask me 2-3 questions at a time).
> 2. Once my profile is up, instruct me to think about things I am passionate about outside of a standard resume (hobbies, sports, music, cooking, fitness, finance, games, or daily curiosities) so we can brainstorm 3 interactive project ideas together.
> 3. Help me pick our favorite idea and co-build it as a live interactive component in `src/lab/` hosted directly on my site!

---

## Option 2: Step-by-Step Prompts

Use these one at a time if you want to take each stage at your own pace.

### Step A + B: Get the Site On & Shape My Personal Brand (`firstnamelastname.com`)

> Read `CLAUDE.md`. First, start the local dev server so I can open `http://localhost:5173` and watch my site update live as we talk. Then act as my creative partner to turn this template into my personal brand site (my own `firstnamelastname.com`). Do not treat this like a dry form. Ask me 2 or 3 questions at a time to help me brainstorm:
> - Who I am and what impression I want people to get when they look up my name
> - What 3 pillars best represent what I do, what I am building, and what I care about
> - What I am focused on right now (for the "Now" section)
>
> Update `src/content/profile.ts`, `index.html`, and `public/favicon.svg` live as I answer so I can watch my site come together.

---

### Step B (Deep Dive): Brainstorm What Content My Site Should Host

Not sure what belongs on a personal website if you do not have a traditional software portfolio? Paste this:

> Help me brainstorm what kind of content I should host on my personal site so it feels unmistakably like me. Ask me a few questions about my day-to-day work, the topics people ask me for advice on, and the things I enjoy learning or sharing. Then suggest 3 or 4 content ideas we could feature on my site (for example: a signature work breakdown, a `/uses` list of my favorite gear/tools, field notes on something I am learning, or an interactive calculator/tool). Help me turn my favorites into real entries or pages on the site.

---

### Step C (Part 1): The Passion-to-Project Brainstorm

This is where working with an AI agent clicks. Use this prompt to turn your hobbies or interests into project ideas:

> I want to host something interactive and memorable on my site, and I want us to brainstorm it together. Instruct me to think about things I am passionate about in real life: hobbies I nerd out on, sports, cooking, coffee, lifting, music, gaming, outdoor gear, personal finance, or an annoying calculation I do by hand. Ask me 2 or 3 quick questions to uncover what I care about. Once I answer, pitch 3 concrete, fun interactive mini-apps, calculators, trackers, or visualizers we can build together in the next 10 minutes and host right on my site.

---

### Step C (Part 2): Co-Build & Host Our Idea Live (The "Aha!" Moment)

Once you and your agent pick an idea from the brainstorm, paste this to build and host it on your site:

> Let's build our favorite idea from our brainstorm and host it live on my site! Create a clean, interactive React component for it in `src/lab/`, register it in `src/lab/registry.tsx`, and wire it into `src/content/projects.ts` using `interactiveId` so it renders live on its project page. Build the first working version now, tell me where to click in my browser to test it, and then ask me what features, presets, or visual tweaks we should add next.

---

### Step C (Part 3): Collaborate & Level It Up

After you click around your new interactive tool in the browser, try telling your agent things in plain English like:
- *"Add 3 quick preset buttons at the top so visitors can try realistic numbers with one click."*
- *"Add a visual bar chart or breakdown card that updates live as I move the sliders."*
- *"Let me save my inputs to `localStorage` so the tool remembers my settings when I refresh."*
- *"Let's build a second interactive tool for another hobby of mine and add it to the Work page!"*

---

### Step D: Customize the Look & Ship to `firstnamelastname.com`

When you are ready to make the visual style your own and put the site online:

> Help me put the finishing touches on my site and get it ready to launch:
> 1. Ask me what visual vibe, accent colors, and font feel fit my personality best, and update `src/index.css` (and `index.html` if we swap fonts) to match.
> 2. Set `starterMode: false` in `src/content/profile.ts` so the Starter Launchpad banner hides, and verify that zero placeholder text remains anywhere.
> 3. Run `npm run build` to confirm everything compiles cleanly with zero errors.
> 4. Walk me step-by-step through pushing this repo to GitHub, deploying it for free on Vercel or Netlify, and connecting my custom `firstnamelastname.com` domain.
