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
    step: 'Stages 1 and 2',
    title: 'Boot the Site and Shape My Brand',
    goal: 'Watch your site hot-reload while you decide what visitors should remember about you.',
    prompt:
      'Read AGENTS.md and CLAUDE.md. Use Node 22, install dependencies if needed, and verify the dev server at localhost:5173. ' +
      'Show me the starter lab at /work/passion-project-lab. Ask me two or three questions at a time about my audience, ' +
      'my story, three content pillars, and what I am focused on now. Update src/content/profile.ts, index.html, and the favicon as we go.',
  },
  {
    id: 'passion-brainstorm',
    step: 'Stage 3',
    title: 'Find Three Projects in My Passions',
    goal: 'Turn something you do for fun into a tool someone can try.',
    prompt:
      'Ask what I do for fun, what I track or compare, and what I keep doing by hand. ' +
      'Use my answers to pitch exactly three mini-apps. For each, describe the visitor, what they do, ' +
      'what happens on screen, and the smallest working version we can build. Let me choose one.',
  },
  {
    id: 'co-build-aha',
    step: 'Stage 4',
    title: 'Co-Build a Tool I Can Try Live',
    goal: 'Get one working interaction onto your site and refine it together.',
    prompt:
      'Align with me on one visitor goal and the smallest working example. Build the tool in src/lab/, register it in ' +
      'src/lab/registry.tsx, and add a project with the matching interactiveId in src/content/projects.ts. ' +
      'Open /work/<slug>, give me an example to try, test empty and boundary inputs, and make one change from my feedback. Run npm run build.',
  },
  {
    id: 'style-and-ship',
    step: 'Stage 4',
    title: 'Get Ready to Publish',
    goal: 'Replace sample content and check the production preview.',
    prompt:
      'Help me replace sample content, verify links and metadata, and set starterMode to false when onboarding is done. ' +
      'Run npm run build and check direct project URLs in the preview. Explain how to publish the static output and connect my domain. ' +
      'Wait for my go-ahead before publishing.',
  },
]
