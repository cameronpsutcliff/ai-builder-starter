# AI Journey Speedrun

Guide the owner through these five steps in order. Ask two or three questions at a time and show changes live as decisions land.

## 1. Boot & Personal Brand

Use Node 22, run `npm install` if needed, and start `npm run dev`. Verify [localhost:5173](http://localhost:5173) and share the actual preview URL. Open `/work/passion-project-lab` and show one visible edit hot-reloading.

Ask who the owner wants to reach, what they want visitors to remember, and which story makes that credible. Choose three content pillars with real examples and capture their current focus in Now. Shape the `firstnamelastname.com` brand in their voice. Update `src/content/profile.ts`, the title and share metadata in `index.html`, and the favicon as decisions land. Review Home and About together.

## 2. Passion-Project Questionnaire

Ask what the owner genuinely cares about outside work, what they track or compare, and what they keep doing by hand. Pitch exactly three concrete projects to seed the site. For each, describe the visitor, one action, the immediate result, and the smallest working version. Let the owner pick one.

## 3. Install Your Lightweight SDLC & Skills Skillset BEFORE Building

Set up a lightweight software development lifecycle (SDLC) and reusable agent skills before writing app code. Add a small glossary where project notes already live. Use a short architecture decision record (ADR) for each consequential choice, capturing the decision and why it was made. Give the agent only the goal, files, and constraints it needs for the current slice. Agree on a short checklist for verifying each change before shipping. Fit these habits into the existing repo layout and preserve working behavior.

## 4. Accounts, Co-Build & Ship

- **Confirm accounts.** Check that the owner has GitHub and free [Vercel Hobby](https://vercel.com/docs/plans/hobby) hosting for their personal site.
- **Align and pick a small slice.** Agree on one visitor goal and one complete input-to-result flow. Use only publishable content and sample data. Keep secrets out of the repo and browser bundle.
- **Build and verify.** Put the React tool in `src/lab/`, register it in `src/lab/registry.tsx`, and match the `interactiveId` in `src/content/projects.ts`. Open `/work/<slug>` and check a normal example, empty or boundary input, and keyboard and mobile use. Let the owner try it and refine it together. Run `npm run build`.
- **Ship.** Clear placeholders, check links and metadata, and set `starterMode: false` when onboarding is finished. Verify direct project URLs locally. With the owner’s go-ahead, connect the GitHub repo to Vercel and verify a hosted preview, including a direct-link refresh. Ask an independent reviewer from another model family to check the release evidence before promotion. With publishing approval, publish and check the public URL. Get the owner’s go-ahead before connecting a domain.

## 5. Level Up Your Ecosystem

Graduate to Compound AI. Write a clean standard operating procedure (SOP) for one repeatable task, keep reusable notes and decisions in a digital brain, and trim each agent prompt to the context it needs to save tokens. Follow [Magpie](https://www.cameronsutcliff.com/magpie) for automatic updates on AI breakthroughs and security safeguards.
