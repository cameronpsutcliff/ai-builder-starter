# Personal Brand & AI Builder Playbook

Use this workflow in Antigravity, Cursor, Claude Code, or Codex. The goal is to have the owner see their story take shape, then turn something they already enjoy into software someone else can use. Ask two or three questions at a time and edit live as decisions land.

## 1. Get the site on screen

1. Check for Node 22. Run `npm install` if dependencies are missing.
2. Start `npm run dev` and verify that `http://localhost:5173` responds. If the port is busy, identify what is serving it and share the actual preview URL.
3. Invite the owner to keep the browser beside the chat. Open `/work/passion-project-lab`, try a control together, and show a visible edit hot-reloading.

## 2. Shape the personal brand

Start with who should land on the site, what they should remember, and which story or project makes that impression credible. Then ask what the owner wants to keep sharing and what has their attention right now.

Draft three distinct pillars, each backed by a real example. A pillar could be a craft, a recurring question, or something the owner is building. Use their words for the tagline and About story. Add two to four current items in Now and confirm any location and links before displaying them.

Update `src/content/profile.ts`, the title and share metadata in `index.html`, and `public/favicon.svg`. Open Home and About with the owner and refine one line together.

## 3. Find three buildable ideas

Ask what the owner spends time on outside work, what they repeatedly track or compare, and what they wish a friend could try in a browser. Build on a specific answer, such as “I rescale recipes every weekend.”

Pitch **exactly three** ideas. For each, give it a name, say who it helps, describe one input and visible result, and define the smallest thing you could demo together. For a cook, that could be a recipe scaler that recalculates quantities, a prep timer that works backward from dinner, or a pantry picker that filters a sample recipe list.

Let the owner choose. Use [Real-World Inspiration](README.md#real-world-inspiration) if they want to see how a narrow interest can make a good site.

## 4. Co-build and ship one app

- **Align.** Agree on who uses it, what they do, and what result proves it works.
- **Small slice.** Pick one complete input-to-result flow and a representative example. Use local state and public or sample data. Save extras for the next pass.
- **Build and verify.** Put the component in `src/lab/`, register it in `src/lab/registry.tsx`, and give its `src/content/projects.ts` entry the same `interactiveId`. Open `/work/<slug>` and test a normal example, an empty or boundary input, and keyboard and mobile use. Let the owner try it, make one refinement from their feedback, and run `npm run build`.
- **Ship.** Replace demo content the owner won’t keep, check links and metadata, and set `starterMode: false` once onboarding is finished. Preview `dist/` and verify direct project URLs. Before promotion, ask an independent reviewer from another model family to check the release evidence. With publishing approval, promote a passing static-host preview and check the public URL. Roll back by restoring the last good deployment.

Keep profile and project data in `src/content/` and tools in `src/lab/`. The browser bundle is public, so use only publishable data and keep secrets out of the repository.
