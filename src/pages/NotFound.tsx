import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="kicker mb-3">Error 404</div>
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
          This page doesn't exist.
        </h1>
        <p className="mb-8" style={{ color: 'var(--muted)' }}>
          The link is stale or the address is off.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/work" className="btn-ghost">Browse the work</Link>
        </div>
      </div>
    </div>
  )
}
