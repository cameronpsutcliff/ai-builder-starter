import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react'
import { projects } from '@/content/projects'
import { interactiveLabRegistry } from '@/lab/registry'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  // Unknown slug -> bounce to the work index.
  if (!project) return <Navigate to="/work" replace />

  const InteractiveComponent = project.interactiveId
    ? interactiveLabRegistry[project.interactiveId]
    : undefined

  return (
    <div className="page-container">
      <Link to="/work" className="inline-flex items-center gap-1 text-sm mb-8" style={{ color: 'var(--muted)' }}>
        <ArrowLeft size={14} /> Back to work
      </Link>

      <div className="page-header">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="kicker">{project.tag}</span>
          <span className="text-xs" style={{ color: 'var(--dim)' }}>{project.year}</span>
          {InteractiveComponent && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(var(--cyan-rgb), 0.14)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Sparkles size={11} /> Live Build
            </span>
          )}
        </div>
        <h1>{project.title}</h1>
        <p className="subtitle max-w-2xl">{project.summary}</p>
      </div>

      {/* If this project has a live interactive component in src/lab/, render it here */}
      {InteractiveComponent && <InteractiveComponent />}

      {project.highlights && project.highlights.length > 0 && (
        <div className="glass p-6 max-w-2xl mb-8">
          <p className="kicker mb-3">Highlights</p>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
            {project.highlights.map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: 'var(--cyan)' }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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
