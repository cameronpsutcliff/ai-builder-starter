// Copyable prompts shown in the Starter Launchpad. See PROMPTS.md for the full playbook.

export interface StarterPrompt {
  id: string
  step: string
  title: string
  goal: string
  prompt: string
}

export const starterPrompts: StarterPrompt[] = [
  {
    id: 'kickoff-brand',
    step: 'Step 1',
    title: 'Boot & Personal Brand',
    goal: 'Get your site running and shape the story and three content pillars for firstnamelastname.com.',
    prompt:
      'Use Node 22, run npm install if needed, and start npm run dev. Verify http://localhost:5173, show me the ' +
      'starter lab at /work/passion-project-lab, and make one edit I can see hot-reload. Ask two or three questions ' +
      'at a time about my audience, story, three content pillars, and current focus. Shape my firstnamelastname.com ' +
      'brand in my voice and update src/content/profile.ts, index.html, and the favicon as we go.',
  },
  {
    id: 'passion-brainstorm',
    step: 'Step 2',
    title: 'Passion-Project Questionnaire',
    goal: 'Find three concrete project ideas in what you genuinely care about outside work.',
    prompt:
      'Ask what I love doing outside work, what I track or compare, and what I keep doing by hand. Pitch exactly ' +
      'three concrete interactive projects to seed my site. For each, name the visitor, what they do, the immediate ' +
      'result, and the smallest version we can build. Let me choose one.',
  },
  {
    id: 'engineering-skillset',
    step: 'Step 3',
    title: 'Install Your Lightweight SDLC & Skills Skillset BEFORE Building',
    goal: 'Set up a few engineering habits now so your project can grow with you.',
    prompt:
      'Before building the app, help me set up a lightweight software development workflow and reusable agent ' +
      'skills. Add a small glossary, use short architecture decision records (ADRs) to capture decisions and why we ' +
      'made them, give the agent only the context it needs for each small slice, and agree on a ' +
      'verify-before-shipping checklist. Use the existing repo layout and preserve what already works.',
  },
  {
    id: 'co-build-aha',
    step: 'Step 4',
    title: 'Accounts, Co-Build & Ship',
    goal: 'Confirm GitHub and free Vercel Hobby hosting, then put your first interactive passion project live.',
    prompt:
      'Confirm I have GitHub and Vercel Hobby accounts. Agree on one visitor goal and the smallest useful version. ' +
      'Build it in src/lab/, register it in src/lab/registry.tsx, and match its interactiveId in ' +
      'src/content/projects.ts. Test the project page with me, check empty and edge inputs, and refine it from ' +
      'feedback. Clear placeholders, turn off Starter Mode when ready, and run npm run build. With my go-ahead, ' +
      'connect GitHub to Vercel, verify a hosted preview including a direct project URL, then publish and check the ' +
      'live URL.',
  },
  {
    id: 'level-up',
    step: 'Step 5',
    title: 'Level Up Your Ecosystem',
    goal: 'Graduate to Compound AI and follow Magpie for ongoing AI breakthroughs and security safeguards.',
    prompt:
      'Help me take the next step into Compound AI. Turn one repeatable task into a clean standard operating ' +
      'procedure (SOP), capture reusable decisions and notes in a digital brain, and trim prompts to the context ' +
      'each task needs so I spend fewer tokens. Point me to https://www.cameronsutcliff.com/magpie so I can follow ' +
      'Magpie for automatic updates on AI breakthroughs and security safeguards.',
  },
]
