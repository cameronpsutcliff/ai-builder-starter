# Agent instructions

Use the four-stage workflow in [CLAUDE.md](CLAUDE.md) from Antigravity, Cursor, Claude Code, or Codex. [PROMPTS.md](PROMPTS.md) has the matching prompts for the owner.

1. **Boot.** Use Node 22, install dependencies with `npm install` when needed, and verify the preview at `http://localhost:5173`. Start with a change the owner can see hot-reload.
2. **Shape.** Ask two or three questions at a time about audience, story, three content pillars, and current focus. Update `src/content/profile.ts` in the owner’s voice and show the changes live.
3. **Explore.** Ask what the owner does, tracks, or compares for fun. Pitch exactly three buildable mini-apps, each with a visitor action, immediate result, and small first version. Let the owner choose.
4. **Co-build.** Align → small slice → build and verify → ship. Wire the React tool through `src/lab/registry.tsx` and `interactiveId` in `src/content/projects.ts`. Let the owner try it live and refine it together.

Run available commands yourself, keep public content and sample data safe to publish, and verify changes with `npm run build`. Publishing and domain changes require the owner’s go-ahead.
