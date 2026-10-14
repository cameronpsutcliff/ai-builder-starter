import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ProjectCard'
import SocialLinks from '@/components/SocialLinks'
import StarterLaunchpad from '@/components/StarterLaunchpad'

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <div className="page-container">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 max-w-3xl">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="kicker">{profile.domain || 'Personal site'}</span>
          {profile.location && (
            <span className="text-xs" style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
              / {profile.location}
            </span>
          )}
        </motion.div>

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
            Explore projects &amp; builds <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn-ghost">About me</Link>
          <span className="ml-1"><SocialLinks /></span>
        </motion.div>
      </section>

      {/* ── Starter Launchpad (only shown while profile.starterMode is true) ── */}
      {profile.starterMode && <StarterLaunchpad />}

      {/* ── Personal Brand Pillars & "Now" Snapshot ───────────── */}
      {(profile.pillars.length > 0 || profile.now.length > 0) && (
        <section className="mb-14 grid gap-6 lg:grid-cols-[2fr_1fr]">
          {profile.pillars.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-3">
              {profile.pillars.map((pillar, idx) => (
                <div key={pillar.title} className="glass p-5 flex flex-col justify-between">
                  <div>
                    <div className="kicker mb-2" style={{ color: 'var(--cyan)' }}>
                      0{idx + 1}
                    </div>
                    <h2
                      className="text-lg font-bold mb-2"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                    >
                      {pillar.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {profile.now.length > 0 && (
            <div className="glass p-6">
              <div className="flex items-center gap-2 mb-3">
                <Compass size={15} style={{ color: 'var(--cyan)' }} />
                <span className="kicker">Focused on right now</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {profile.now.map(item => (
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
        </section>
      )}

      {/* ── Featured work & hosted builds ────────────────────── */}
      <section className="mt-4">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="kicker mb-1">Projects &amp; Lab</p>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
              Selected work &amp; live builds
            </h2>
          </div>
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
