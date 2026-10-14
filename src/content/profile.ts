// ════════════════════════════════════════════════════════════════
//  YOUR PERSONAL BRAND PROFILE  -  edit everything in this file.
//  This file powers your home page, About page, header, and footer.
//  You can edit it by hand or ask your AI agent to interview you
//  and fill it in with your own voice.
// ════════════════════════════════════════════════════════════════

export interface SocialLink {
  label: string
  href: string
}

export interface BrandPillar {
  title: string
  description: string
}

export const profile = {
  // Set this to false once you and your AI agent personalize your site.
  // While true, the home page shows the interactive Starter Launchpad
  // with copy-paste prompts to help you brainstorm and build.
  starterMode: true,

  // Shown big on the home page and in the browser tab.
  name: 'Your Name',

  // Your personal domain or handle (e.g. "joshsutcliff.com").
  // Shown as a subtle label on the home hero. Leave empty ('') to hide.
  domain: 'firstnamelastname.com',

  // Optional city/region label shown on the About page. Leave empty ('') to hide.
  location: 'Your City, State',

  // One clear sentence under your name. Who you are and what you do, in plain words.
  tagline: 'Builder, problem solver, and curious human.',

  // The home-page intro paragraph. 2-4 sentences in your own voice.
  intro:
    'This is your home base on the internet. Use it to share who you are, what you care ' +
    'about, and the projects or tools you are building. Open this repo with your AI agent ' +
    'to brainstorm your personal brand and build something interactive right on this site.',

  // Three pillars that sum up what you do or what this site hosts.
  // Shown on the home page to give visitors an immediate sense of your world.
  pillars: [
    {
      title: 'What I Do',
      description:
        'Share your craft, your day-to-day work, or the kinds of problems people come to you to solve.',
    },
    {
      title: 'What I Am Building',
      description:
        'Host live tools, calculators, experiments, and side projects that you and your AI agent build together.',
    },
    {
      title: 'What I Care About',
      description:
        'Give people a window into the hobbies, books, sports, music, or ideas you nerd out on outside of work.',
    },
  ] as BrandPillar[],

  // A "/now" snapshot: 2-4 bullets on what has your attention right now.
  // Great personal sites feel alive because they show what you are up to today.
  now: [
    'Setting up my personal site and experimenting with AI-assisted building',
    'Brainstorming my first interactive mini-app to host right here',
    'Pick a book, hobby, fitness goal, or side quest you are deep into right now',
  ],

  // The longer "About" page story. Write as many paragraphs as you like.
  about: [
    'Tell your story here. Where you come from, what you have built or worked on, and what ' +
      'drives you. Write the way you talk to a friend over coffee.',
    'Use a second paragraph for the problems you enjoy solving, the tools you reach for, ' +
      'and the kind of people or teams you like working with.',
    'Use a third paragraph for life outside of work: the hobbies, passions, and curiosities ' +
      'that make you who you are. Those passions also make the best fuel for side projects.',
  ],

  // Things you nerd out on (hobbies, sports, crafts, topics).
  // Shown on the About page AND used by your AI agent to brainstorm fun project ideas.
  passions: [
    'Add a hobby you love',
    'A sport or game you follow',
    'A craft, food, or music obsession',
    'A topic you could talk about for hours',
  ],

  // Quick facts, tools, or skills shown as chips on the About page.
  skills: ['Skill one', 'Skill two', 'Skill three', 'Skill four', 'Skill five'],

  // Where people can reach or follow you. Delete any you do not use.
  // Supported labels: email, github, linkedin, x, twitter, instagram, website.
  links: [
    { label: 'email', href: 'mailto:you@example.com' },
    { label: 'github', href: 'https://github.com/your-handle' },
    { label: 'linkedin', href: 'https://linkedin.com/in/your-handle' },
  ] as SocialLink[],

  // Footer line. The current year is added automatically.
  footerNote: 'Built on my own corner of the internet.',
}

export type Profile = typeof profile
