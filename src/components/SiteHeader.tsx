import { NavLink, Link } from 'react-router-dom'
import { ThemeToggle } from '@abyssal/design-system'
import { profile } from '@/content/profile'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 backdrop-blur-md"
      style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <Link
        to="/"
        className="font-bold tracking-tight shrink-0"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
      >
        {profile.name}
      </Link>

      <nav className="flex items-center gap-1 sm:gap-2">
        {NAV.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="px-2 sm:px-3 py-1.5 rounded-md text-sm transition-colors"
            style={({ isActive }) => ({
              color: isActive ? 'var(--text)' : 'var(--muted)',
              background: isActive ? 'var(--card)' : 'transparent',
            })}
          >
            {item.label}
          </NavLink>
        ))}
        <span className="ml-1">
          <ThemeToggle />
        </span>
      </nav>
    </header>
  )
}
