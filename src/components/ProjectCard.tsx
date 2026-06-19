import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/content/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="glass block p-6 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="kicker">{project.tag}</span>
        <span className="text-xs" style={{ color: 'var(--dim)' }}>{project.year}</span>
      </div>
      <h3
        className="text-xl font-bold mb-2 flex items-center gap-1"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
      >
        {project.title}
        <ArrowUpRight size={18} style={{ color: 'var(--cyan)' }} />
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
        {project.summary}
      </p>
    </Link>
  )
}
