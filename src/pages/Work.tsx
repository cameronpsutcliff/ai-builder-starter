import { projects } from '@/content/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Work() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p className="kicker mb-3">Portfolio</p>
        <h1>Work</h1>
        <p className="subtitle">A selection of things I have made.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
