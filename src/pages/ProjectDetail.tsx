import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  // Unknown slug -> bounce to the work index.
  if (!project) return <Navigate to="/work" replace />

  return (
    <div className="page-container">
      <Link to="/work" className="inline-flex items-center gap-1 text-sm mb-8" style={{ color: 'var(--muted)' }}>
        <ArrowLeft size={14} /> Back to work
      </Link>

      <div className="page-header">
        <div className="flex items-center gap-3 mb-3">
          <span className="kicker">{project.tag}</span>
          <span className="text-xs" style={{ color: 'var(--dim)' }}>{project.year}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="subtitle">{project.summary}</p>
      </div>

      <article className="max-w-2xl flex flex-col gap-5">
        {project.body.map((para, i) => (
          <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {para}
          </p>
        ))}
      </article>

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary mt-8">
          Visit project <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  )
}
