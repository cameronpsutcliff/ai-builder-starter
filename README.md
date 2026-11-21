# Personal Brand & AI Builder Starter

Build a personal site you’re excited to share, then give visitors something they can actually use. This React, Vite, and TypeScript starter includes a portfolio, a live project lab, and a guided AI building session.

[Repository overview](docs/repo-overview.html) · [Copy-and-paste prompts](PROMPTS.md) · [Agent playbook](AGENTS.md)

## AI Journey Speedrun

Open this folder in Antigravity, Cursor, Claude Code, or Codex. Paste this into your agent to get started.

> Read AGENTS.md and CLAUDE.md and guide me through the AI Journey Speedrun in order. Boot my site and shape my personal brand, interview me and pitch three passion projects, set up lightweight engineering skills before building, confirm GitHub and free Vercel hosting and co-build the project I choose, then help me level up with Compound AI and Magpie. Ask for my go-ahead before any deployment or domain change.

1. **Boot & Personal Brand.** Get your site running and shape the story and three content pillars for firstnamelastname.com.
2. **Passion-Project Questionnaire.** Find three concrete project ideas in what you genuinely care about outside work.
3. **Install Your Lightweight SDLC & Skills Skillset BEFORE Building.** Set up a few engineering habits now so your project can grow with you.
4. **Accounts, Co-Build & Ship.** Confirm GitHub and free Vercel Hobby hosting, then put your first interactive passion project live.
5. **Level Up Your Ecosystem.** Graduate to Compound AI and follow [Magpie](https://www.cameronsutcliff.com/magpie) for ongoing AI breakthroughs and security safeguards.

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

When you’re ready to publish, import your GitHub repository into [Vercel Hobby](https://vercel.com/docs/plans/hobby). Use the Vite preset with Node 22, `npm run build`, and `dist/` as the output directory. Set up a fallback to `index.html` for client-side routes such as `/work/my-tool`. Check the hosted preview and a direct-link refresh before connecting your domain. GitHub Actions runs a clean install and build on pull requests and pushes to `main`.
