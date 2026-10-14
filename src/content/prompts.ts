// ════════════════════════════════════════════════════════════════
//  STARTER PROMPTS  -  copy-paste prompts for your AI coding agent.
//  Shown in the Starter Launchpad while profile.starterMode is true.
//  Full playbook also lives in PROMPTS.md at the root of the repo.
// ════════════════════════════════════════════════════════════════

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
    step: 'Step A + B',
    title: 'Get the Site On & Shape My Personal Brand',
    goal: 'Boot the live preview, brainstorm what your firstnamelastname.com site should be, and fill in your personal brand.',
    prompt:
      'Read CLAUDE.md. First, make sure the local dev server is running so I can watch my site update live in my browser. ' +
      'Then act as my creative partner to help me turn this into my personal brand site (my own firstnamelastname.com). ' +
      'Do not treat this like a dry form. Brainstorm with me in small steps: ask me who I am, what I want this site to be, ' +
      'what kind of content I should host here, and what I am focused on right now. Update src/content/profile.ts and index.html as we talk so I can watch it come to life.',
  },
  {
    id: 'passion-brainstorm',
    step: 'Step C (Part 1)',
    title: 'Brainstorm Project Ideas From My Passions',
    goal: 'Push your agent to ask about your hobbies, obsessions, and daily curiosities, then pitch interactive project ideas.',
    prompt:
      'I want to host something interactive and memorable on my site, and I want us to brainstorm it together. ' +
      'Instruct me to think about things I am passionate about outside of a standard resume: hobbies I nerd out on, sports, music, cooking, ' +
      'games, fitness, personal finance, or everyday problems I care about. Ask me 2 or 3 quick questions to uncover what I am into. ' +
      'Once I answer, pitch 3 concrete, fun interactive mini-apps, calculators, trackers, or visualizers we can build together right now and host on my site.',
  },
  {
    id: 'co-build-aha',
    step: 'Step C (Part 2)',
    title: 'Co-Build & Host a Live Interactive Tool (The "Aha!" Moment)',
    goal: 'Collaborate with your agent to build a working interactive component in src/lab/ and embed it live on your site.',
    prompt:
      'Let us build our favorite idea from our brainstorm and host it live on my site. ' +
      'Create an interactive React component for it inside src/lab/, register it in src/lab/registry.tsx, and wire it into ' +
      'src/content/projects.ts so it renders live on its project page. Build a clean first version now, tell me where to click in my browser ' +
      'to try it out, and then ask me what tweaks, features, or styling changes we should make next.',
  },
  {
    id: 'style-and-ship',
    step: 'Bonus',
    title: 'Dial In the Look & Ship to My Domain',
    goal: 'Customize colors and fonts to fit your vibe, set starterMode to false, verify the build, and deploy.',
    prompt:
      'Help me put the finishing touches on my site. First, ask me what vibe, color palette, and font feel I want for my personal brand, ' +
      'and update src/index.css to match. Next, flip starterMode to false in src/content/profile.ts and make sure no placeholder text remains. ' +
      'Run npm run build to verify everything compiles cleanly, then walk me step-by-step through deploying this to Vercel or Netlify and connecting my custom domain.',
  },
]
