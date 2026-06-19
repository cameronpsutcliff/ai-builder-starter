import { Mail, Github, Linkedin, Twitter, Instagram, Globe, type LucideIcon } from 'lucide-react'
import { profile } from '@/content/profile'

// Map a profile link label to an icon. Unknown labels fall back to a globe.
const ICONS: Record<string, LucideIcon> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  twitter: Twitter,
  instagram: Instagram,
  website: Globe,
}

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {profile.links.map(link => {
        const Icon = ICONS[link.label.toLowerCase()] ?? Globe
        const isMail = link.href.startsWith('mailto:')
        return (
          <a
            key={link.href}
            href={link.href}
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noreferrer'}
            aria-label={link.label}
            title={link.label}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            <Icon size={16} />
          </a>
        )
      })}
    </div>
  )
}
