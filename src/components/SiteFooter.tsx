import { profile } from '@/content/profile'
import SocialLinks from './SocialLinks'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="page-footer">
      <div className="flex flex-col items-center gap-4">
        <SocialLinks />
        <p className="text-sm" style={{ color: 'var(--dim)' }}>
          © {year} {profile.name}. {profile.footerNote}
        </p>
      </div>
    </footer>
  )
}
