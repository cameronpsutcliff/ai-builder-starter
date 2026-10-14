// ════════════════════════════════════════════════════════════════
//  YOUR PROJECTS & LIVE BUILDS  -  one entry per thing on your site.
//  Add, remove, or reorder entries. Each entry gets a card on the
//  home/work grid AND its own detail page at /work/:slug.
//
//  TIP: Want to host a live interactive calculator, tool, or mini-app
//  that you and your AI agent built together? Drop the component in
//  src/lab/, register it in src/lab/registry.tsx, and set
//  `interactiveId` on your project below!
// ════════════════════════════════════════════════════════════════

export interface Project {
  // Used in the URL, e.g. /work/my-first-project. Lowercase, dashes, no spaces.
  slug: string
  // Card + page title.
  title: string
  // One-line summary shown on the card.
  summary: string
  // Short label for the kind of work (e.g. "Interactive Tool", "Web App", "Essay", "Case Study").
  tag: string
  // Year or status label (e.g. "2026" or "Live Build").
  year: string
  // Optional key from src/lab/registry.tsx to render a live interactive tool on this page.
  interactiveId?: string
  // Optional bullet highlights shown on the detail page.
  highlights?: string[]
  // Optional outbound link (live site, repo, video, etc.). Delete the line if none.
  link?: string
  // The detail-page body. Each string is a paragraph.
  body: string[]
}

export const projects: Project[] = [
  {
    slug: 'passion-project-lab',
    title: 'Interactive Passion-to-Project Lab',
    summary:
      'A live interactive widget hosted right on this site. Click inside to brainstorm a custom tool from your hobbies and co-build it with your AI agent.',
    tag: 'Interactive Tool',
    year: 'Live Demo',
    interactiveId: 'passion-spark-demo',
    highlights: [
      'Hosted directly inside your site via src/lab/',
      'Turns any hobby or obsession into a ready-to-build AI prompt',
      'Swap this demo out with the first interactive tool you and your agent build together',
    ],
    body: [
      'Your personal website can do way more than display static text. Because this site is a real React application, you and your AI agent can build working calculators, visualizers, trackers, and mini-apps and host them right here on their own URL.',
      'Try the interactive lab above: pick something you care about outside of a standard resume, choose a tool format, and copy the generated prompt into your AI coding tool. In a few minutes, you will have your own custom software running live on your site.',
    ],
  },
  {
    slug: 'first-project',
    title: 'Your Signature Project or Case Study',
    summary: 'A one-line description of something you built, led, or solved and why it mattered.',
    tag: 'Case Study',
    year: '2026',
    link: 'https://example.com',
    highlights: [
      'What problem you set out to solve and who it helped',
      'The key decisions or tradeoffs you made along the way',
      'The concrete result or what you learned from shipping it',
    ],
    body: [
      'Open with what the project is in one clear sentence. Then explain the problem you set out to solve and why you cared about it.',
      'Describe what you built or did. Be concrete: name the choices you made, the obstacles you ran into, and how you worked through them.',
      'Close with the outcome: what shipped, what you learned, and what you would explore next.',
    ],
  },
  {
    slug: 'third-project',
    title: 'A Deep Dive, Guide, or Obsession',
    summary: 'Personal sites shine when they include the topics, gear, or experiments you nerd out on.',
    tag: 'Deep Dive',
    year: '2026',
    body: [
      'Every entry in this list does not have to be a traditional work project. Some of the best pages on a firstnamelastname.com site are deep dives into a hobby, a curated list of favorite tools or books, a training log, or notes from something you are learning.',
      'Ask your AI agent to help you brainstorm what kind of content fits your personality best, then turn this card into something unmistakably yours.',
    ],
  },
]
