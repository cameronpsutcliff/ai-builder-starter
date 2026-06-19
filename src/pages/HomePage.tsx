import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ProjectCard'
import SocialLinks from '@/components/SocialLinks'

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <div className="page-container">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 max-w-3xl">
        <motion.p custom={0} initial="hidden" animate="show" variants={fade} className="kicker mb-4">
          Personal site
        </motion.p>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="display-type text-4xl sm:text-6xl font-extrabold leading-[1.05] mb-5"
          style={{ color: 'var(--text)' }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="text-xl sm:text-2xl mb-6"
          style={{ color: 'var(--cyan)' }}
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="text-base sm:text-lg leading-relaxed mb-8"
          style={{ color: 'var(--muted)' }}
        >
          {profile.intro}
        </motion.p>
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="flex flex-wrap items-center gap-3"
        >
          <Link to="/work" className="btn-primary">
            See the work <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn-ghost">About me</Link>
          <span className="ml-1"><SocialLinks /></span>
        </motion.div>
      </section>

      {/* ── Featured work ────────────────────────────────────── */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
            Selected work
          </h2>
          <Link to="/work" className="text-sm flex items-center gap-1" style={{ color: 'var(--cyan)' }}>
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
