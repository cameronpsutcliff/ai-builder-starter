import { profile } from '@/content/profile'
import SocialLinks from '@/components/SocialLinks'

export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p className="kicker mb-3">
          About {profile.location ? `/ ${profile.location}` : ''}
        </p>
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.tagline}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="max-w-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            {profile.about.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                {para}
              </p>
            ))}
          </div>

          {profile.passions.length > 0 && (
            <div className="pt-2">
              <p className="kicker mb-3">Passions, hobbies &amp; curiosities</p>
              <div className="flex flex-wrap gap-2">
                {profile.passions.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: 'rgba(var(--cyan-rgb), 0.10)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profile.skills.length > 0 && (
            <div className="pt-2">
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
          )}
        </article>

        <aside className="flex flex-col gap-5">
          {profile.now.length > 0 && (
            <div className="glass p-6">
              <p className="kicker mb-3">Now</p>
              <ul className="flex flex-col gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {profile.now.map(item => (
                  <li key={item} className="flex items-start gap-2">
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

          <div className="glass p-6">
            <p className="kicker mb-4">Find me</p>
            <SocialLinks />
          </div>
        </aside>
      </div>
    </div>
  )
}
