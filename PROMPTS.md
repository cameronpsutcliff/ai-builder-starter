# AI Builder Prompt Playbook

Paste these prompts into Antigravity, Cursor, Claude Code, or Codex with this folder open. Start with the kickoff or pick up at the stage you need.

## Kickoff

> Read AGENTS.md and CLAUDE.md. Boot the local site and give me the preview URL. Ask me two or three questions at a time to shape my brand, then update the site while I watch. Next, interview me about my real-life passions and pitch three concrete interactive projects. Let me pick, then co-build and verify the smallest working version with me. Help me get it ready to publish.

## 1. Put the site on screen

> Use Node 22, install dependencies if needed, start the dev server, and verify localhost:5173. Show me the home page and the starter lab at /work/passion-project-lab. Make one visible edit so I can see hot reload.

## 2. Find my story and pillars

> Ask who I want to reach, what they should remember, and what work or life story makes that credible. Help me choose three distinct content pillars and write a short Now section. Update src/content/profile.ts, index.html, and the favicon as we agree on changes. Show me Home and About so I can react to the copy.

## 3. Turn my interests into three ideas

> Ask what I do for fun, what I track or compare, and what I keep doing by hand. Use my answers to pitch exactly three mini-apps. For each, describe the visitor, what they do, what happens on screen, and the smallest working version we can build. Let me choose one.

## 4. Co-build and prepare to ship

> Align with me on one visitor goal and the smallest feature that serves it. Build it in src/lab/, register it in src/lab/registry.tsx, and add a project with the matching interactiveId. Open /work/<slug> and give me an example to try. Check empty and edge inputs, make one improvement from my feedback, and run npm run build. Help me clear placeholders, turn off Starter Mode, and verify a preview before I approve publishing.

Try feedback like “Add one preset so I can try it instantly” or “Show me what changes when I move the slider.”

For examples of what people publish, see [Real-World Inspiration](README.md#real-world-inspiration).
