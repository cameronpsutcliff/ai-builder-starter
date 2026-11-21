# Personal Brand & AI Builder Starter

Build a personal site you’re excited to share, then give visitors something they can actually use. This React, Vite, and TypeScript starter includes a portfolio, a live project lab, and a guided AI building session.

[Repository overview](docs/repo-overview.html) · [Copy-and-paste prompts](PROMPTS.md) · [Agent playbook](AGENTS.md)

## Start here

Open this folder in Antigravity, Cursor, Claude Code, or Codex. Paste this into your agent:

> Read AGENTS.md and CLAUDE.md. Get my site running on localhost:5173 and show me the live preview. Help me shape my story, three content pillars, and what I’m focused on now. Then ask about the things I do for fun, pitch three interactive tools based on my answers, and co-build the one I pick. Verify it with me in the browser and prepare it to publish.

1. **See it live.** Keep the preview beside your chat and watch your first edit hot-reload. Try the [starter lab](http://localhost:5173/work/passion-project-lab) to see how a tool fits into a project page.
2. **Make it yours.** Decide who should visit, what they should remember, and what three themes you can keep writing or building around.
3. **Find the project hiding in your hobbies.** Tell your agent what you track, compare, collect, or keep doing by hand. Ask for three ideas you can try in one sitting.
4. **Build and share one small thing.** Align on the visitor’s goal, choose the smallest usable slice, build and verify it together, then ship when ready.

### Run it yourself

Use Node.js 22. Leave the dev server running while you edit.

```bash
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173). Run `npm run build` from a second terminal to type-check the site and produce `dist/`.

## Real-World Inspiration

These examples show how builders have turned a focused interest into a site visitors can explore.

| Interest | What the builder made | A small starting point |
| --- | --- | --- |
| Precision sports | A hosted ballistics and reloading workbench | A searchable gear inventory |
| Dashboard design | A toolkit for exploring dashboard layouts | Compare two layouts with sample data |
| Industry research | A recurring web brief with sector and company views | A filterable reading list for one industry |
| Military heritage | A service archive with records and timelines | A timeline built from cleared public records |
| Career and legacy | A portfolio with career milestones and stories | Three projects with outcomes and lessons |

## Make changes

| File | What it controls |
| --- | --- |
| `src/content/profile.ts` | Identity, story, pillars, Now, links, and Starter Launchpad visibility |
| `src/content/projects.ts` | Work cards and detail pages at `/work/:slug` |
| `src/lab/` | Interactive React tools and the registry connecting them to project pages |
| `src/content/prompts.ts` | Copyable prompts in the on-site Starter Launchpad |
| `index.html` and `public/favicon.svg` | Browser title, share metadata, and tab icon |

## Publish your site

Replace the sample content, set `starterMode: false`, and run `npm run build`. Preview the output with `npm run preview` and try your lab from a direct URL as well as from the Work page.

When you’re ready to publish, connect your repository to a static host and configure it to build with Node 22 and publish `dist/`. Set up a fallback to `index.html` for client-side routes such as `/work/my-tool`. Check the hosted preview and a direct-link refresh before connecting your domain. GitHub Actions runs a clean install and build on pull requests and pushes to `main`.
