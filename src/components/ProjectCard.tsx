import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import type { Project } from '@/content/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="glass block p-6 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="kicker">{project.tag}</span>
        <div className="flex items-center gap-2">
          {project.interactiveId && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px]"
              style={{
                background: 'rgba(var(--cyan-rgb), 0.14)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Sparkles size={10} /> Live
            </span>
          )}
          <span className="text-xs" style={{ color: 'var(--dim)' }}>{project.year}</span>
        </div>
      </div>
      <h3
        className="text-xl font-bold mb-2 flex items-center justify-between gap-2"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
      >
        <span>{project.title}</span>
        <ArrowUpRight size={18} className="shrink-0" style={{ color: 'var(--cyan)' }} />
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
        {project.summary}
      </p>
    </Link>
  )
}
