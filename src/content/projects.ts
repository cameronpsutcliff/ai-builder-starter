// ════════════════════════════════════════════════════════════════
//  YOUR PROJECTS  -  one entry per thing you want to show off.
//  Add, remove, or reorder entries. The site builds the grid and the
//  detail pages from this list automatically.
// ════════════════════════════════════════════════════════════════

export interface Project {
  // Used in the URL, e.g. /work/my-first-project. Lowercase, dashes, no spaces.
  slug: string
  // Card + page title.
  title: string
  // One-line summary shown on the card.
  summary: string
  // Short label for the kind of work (e.g. "Web app", "Photography", "Essay").
  tag: string
  // Year or date range. Shown as a small label.
  year: string
  // Optional outbound link (live site, repo, etc.). Delete the line if none.
  link?: string
  // The detail-page body. Each string is a paragraph.
  body: string[]
}

export const projects: Project[] = [
  {
    slug: 'first-project',
    title: 'Your First Project',
    summary: 'A one-line description of what this is and why it mattered.',
    tag: 'Category',
    year: '2025',
    link: 'https://example.com',
    body: [
      'Open with what the project is in one sentence. Then explain the problem you ' +
        'set out to solve and who it was for.',
      'Describe what you actually did and built. Be concrete - name the choices you ' +
        'made and the tradeoffs behind them.',
      'Close with the outcome: what shipped, what you learned, what you would do next.',
    ],
  },
  {
    slug: 'second-project',
    title: 'Your Second Project',
    summary: 'Another short description. Swap in something real.',
    tag: 'Category',
    year: '2024',
    body: [
      'This entry has no external link, to show that the field is optional.',
      'Write as much or as little as you want here.',
    ],
  },
  {
    slug: 'third-project',
    title: 'Your Third Project',
    summary: 'A third placeholder so the grid looks full. Delete if you want fewer.',
    tag: 'Category',
    year: '2024',
    body: ['Replace this with the real story.'],
  },
]
