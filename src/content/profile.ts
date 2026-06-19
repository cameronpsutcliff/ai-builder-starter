// ════════════════════════════════════════════════════════════════
//  YOUR PROFILE  -  edit everything in this file.
//  This is the single source of truth for who you are across the site.
//  Nothing here is code you need to understand; just replace the text.
// ════════════════════════════════════════════════════════════════

export const profile = {
  // Shown big on the home page and in the browser tab.
  name: 'Your Name',

  // One line under your name. What you do, in plain words.
  tagline: 'Designer, builder, and curious human.',

  // The home-page intro paragraph. 2-4 sentences in your own voice.
  intro:
    'This is your space to introduce yourself. Say what you make, what you care ' +
    'about, and what you want people to know first. Keep it human and specific - ' +
    'one true sentence beats three vague ones.',

  // The longer "About" page. Write as many paragraphs as you like.
  about: [
    'Tell your story here. Where you come from, what you have built, what you are ' +
      'working toward. This first paragraph is the hook.',
    'A second paragraph can go deeper: the kind of problems you like, the tools you ' +
      'reach for, the people you like to work with.',
  ],

  // Quick facts / skills shown as chips on the About page. Add or remove freely.
  skills: ['Skill one', 'Skill two', 'Skill three', 'Skill four', 'Skill five'],

  // Where to find you. Delete any you don't use; the icons map automatically.
  // Supported labels: email, github, linkedin, x, instagram, website.
  links: [
    { label: 'email', href: 'mailto:you@example.com' },
    { label: 'github', href: 'https://github.com/your-handle' },
    { label: 'linkedin', href: 'https://linkedin.com/in/your-handle' },
  ],

  // Footer line. Year is filled in automatically.
  footerNote: 'Built with care.',
}

export type Profile = typeof profile
