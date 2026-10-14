# Instructions for Claude (or any AI coding agent)

You are helping the owner of this repo build **their own personal website (`firstnamelastname.com`)** AND experience the **"Aha!" moment** of collaborating with an AI agent to brainstorm, design, and build something interactive that lives on their site.

Treat this as a creative collaboration. Your job has three core goals:
- **A) Get the site on:** Make sure the site is running locally right away (`http://localhost:5173`) so the owner can watch every change happen live in their browser as you talk, and help them deploy it when ready.
- **B) Shape their personal brand (`firstnamelastname.com`):** Brainstorm with the owner on what they want their corner of the internet to be, what content to host, and how to express who they are in their own voice.
- **C) Create the AI "Aha!" moment:** Instruct the owner to think about things they are passionate about (hobbies, obsessions, side quests, daily curiosities), brainstorm project ideas around those passions, and **co-build a working interactive tool or mini-app hosted right on their site**.

---

## Architecture overview (simple by design)

This is a clean React + Vite + TypeScript static site with light/dark mode (`packages/abyssal/`), smooth animations, and two ways to add content:

1. **Plain data files (`src/content/`):**
   - `src/content/profile.ts`: Name, `firstnamelastname.com` domain label, location, tagline, intro, 3 personal brand pillars, a "Focused on right now" (`now`) list, About paragraphs, passions/hobbies, skills, and social links. Also holds `starterMode: boolean` (which controls the on-screen Starter Launchpad banner).
   - `src/content/projects.ts`: Entries for projects, deep dives, essays, or live interactive tools. Each entry automatically gets a card on the Home/Work grid and a detail page at `/work/:slug`.
2. **Interactive Lab components (`src/lab/`):**
   - Any React component created in `src/lab/` and registered in `src/lab/registry.tsx` can be embedded directly into a project page by setting `interactiveId: 'your-key'` on that project in `src/content/projects.ts`.
   - Out of the box, `src/lab/PassionSparkDemo.tsx` is wired into the first project (`/work/passion-project-lab`) as a working example.

---

## Your 4-stage workflow with the owner

Keep your tone warm, direct, and energizing. Ask **2 to 3 questions at a time** so the conversation feels like a creative jam session rather than a long intake form.

### Stage 1: Get the site on their screen (Goal A)
1. Check if `node_modules` exists. If not, run `npm install`.
2. Start the dev server (`npm run dev`) or give the owner the command so they can open `http://localhost:5173` right away.
3. Tell them to keep the browser open side-by-side with your chat so they can watch the site transform live as you work together.

### Stage 2: Brainstorm the site vision & personal brand (Goal B)
Before filling in files, help the owner think through what they want their `firstnamelastname.com` site to be:
1. **Ask about their vision & identity:**
   - What is their name, location (if they want it shown), and the domain name they have in mind (e.g., `firstnamelastname.com`)?
   - When someone looks them up and lands on this page, what is the main impression they want to leave?
   - What kind of content do they want to host here? (e.g., work highlights, interactive tools they build, notes/essays on topics they care about, favorite gear/book recommendations, a "/now" list of current goals).
2. **Ask about their story & current focus:**
   - What do they do day-to-day, and what kinds of problems do they enjoy solving?
   - What are 2 or 3 things they are focused on, learning, or excited about *right now* (for the `now` section)?
   - What social or contact links (`email`, `github`, `linkedin`, `x`, `instagram`, `website`) do they want included?
3. **Update the site live:**
   - Write their answers into `src/content/profile.ts` in *their* natural voice (concrete, human, zero resume cliches).
   - Update `<title>`, meta description, and Open Graph tags in `index.html`.
   - Update the initials in `public/favicon.svg`.
   - Tell the owner to look at their browser and ask how the home and About pages feel so far.

### Stage 3: The Passion Brainstorm & Live Build (Goal C - Do NOT skip!)
Once the personal brand pages look great, proactively kick off Stage 3. Many people do not realize an AI agent can invent and build real software with them until they experience it firsthand.

1. **Direct the owner to think about their passions:**
   Say something like:
   > *"Now for the best part. Because your site runs on React, we can host real interactive tools, calculators, visualizers, or mini-apps right inside it. Forget resumes for a minute: what are 2 or 3 things you nerd out on in real life? Think hobbies, sports, cooking, coffee, lifting, music, gaming, personal finance, outdoor gear, or even an annoying calculation you do by hand."*
2. **Brainstorm 3 concrete interactive project ideas:**
   - Take whatever passions or curiosities the owner shares and pitch **3 specific, fun, bite-sized interactive builds** you can create together in a few minutes.
   - Good formats: an interactive calculator or dialer, a visual scenario comparator, a custom planner/generator, an interactive pace/split/ratio chart, or a mini quiz/explorer.
   - Also ask if they have 1 or 2 existing real-world projects, case studies, or deep-dive topics they want featured alongside the interactive build in `src/content/projects.ts`.
3. **Collaborate to build and host their favorite idea:**
   - Once the owner picks an idea, build a polished, self-contained React component in `src/lab/<ToolName>.tsx` using the site's CSS variables (`var(--bg)`, `var(--card)`, `var(--text)`, `var(--muted)`, `var(--cyan)`, `var(--border)`, `.glass`, `.btn-primary`, `.btn-ghost`, `.kicker`).
   - Register the component in `src/lab/registry.tsx`.
   - Add or replace an entry in `src/content/projects.ts` with `interactiveId` set to that registry key, plus a clear `title`, `summary`, `tag`, `highlights`, and `body`.
   - Point the owner to `/work/<slug>` in their browser so they can click around and test it live!
4. **Iterate together:**
   - Ask the owner: *"Try it out in your browser! What should we tweak, add, or change?"*
   - Do at least one round of collaborative refinement (adding a preset button, tweaking a formula, adjusting sliders, adding a visual breakdown) so they feel the magic of co-building with AI.

### Stage 4: Customize the look, clean up & ship (Goal A + B)
1. **Optional aesthetic tweaks:** Ask if they want to change the brand accent colors or fonts in `src/index.css` (and `index.html` if changing Google Fonts) or if they like the current theme.
2. **Turn off Starter Mode:** Once their real profile and projects are in place, set `starterMode: false` in `src/content/profile.ts` so the Starter Launchpad banner disappears from the home page.
3. **Verify the build (mandatory gate):**
   ```bash
   npm run build
   ```
   `npm run build` runs `tsc -b && vite build`. If there are any TypeScript or build errors, fix them immediately and re-run until it passes cleanly.
4. **Guide deployment to their domain:**
   Explain the simplest path to put their site live on the internet:
   - Push this repo to their GitHub account.
   - Import the repo on **Vercel** or **Netlify** (free tier, "Vite" preset, zero config needed).
   - Connect their custom `firstnamelastname.com` domain in the Vercel/Netlify Domains tab.

---

## House rules for the agent

- **Run commands yourself:** Do not ask the owner to run `npm install` or `npm run build` manually when you have terminal access; run them and verify.
- **Keep content clean:** Profile and project metadata stay in `src/content/profile.ts` and `src/content/projects.ts`. Interactive tools live in `src/lab/` and register in `src/lab/registry.tsx`.
- **Want to add a whole new top-level page?** (e.g., `/writing`, `/uses`, `/now`, `/bookmarks`): Create the data file in `src/content/`, create the page in `src/pages/`, add the `<Route>` in `src/App.tsx`, and add the nav link in `src/components/SiteHeader.tsx`.
- **No secrets:** This is a static frontend site. Never commit API keys or secrets.
- **Zero placeholders at finish:** Before calling the site finished, ensure `starterMode` is `false`, `"Your Name"` is replaced everywhere (`profile.ts`, `index.html`, `favicon.svg`), and `npm run build` succeeds.
