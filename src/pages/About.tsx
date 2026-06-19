import { profile } from '@/content/profile'
import SocialLinks from '@/components/SocialLinks'

export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p className="kicker mb-3">About</p>
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.tagline}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <article className="max-w-2xl flex flex-col gap-5">
          {profile.about.map((para, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              {para}
            </p>
          ))}

          <div className="mt-2">
            <p className="kicker mb-3">What I work with</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>

        <aside className="lg:w-56">
          <div className="glass p-6 sticky top-24">
            <p className="kicker mb-4">Find me</p>
            <SocialLinks />
          </div>
        </aside>
      </div>
    </div>
  )
}
