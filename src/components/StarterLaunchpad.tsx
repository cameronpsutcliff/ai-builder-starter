import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Check, Sparkles, Terminal, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { starterPrompts } from '@/content/prompts'

export default function StarterLaunchpad() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [collapsed, setCollapsed] = useState(false)

  async function handleCopy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2200)
    } catch {
      // Clipboard fallback
    }
  }

  return (
    <section
      aria-label="Starter Launchpad"
      className="glass p-6 sm:p-8 mb-12"
      style={{ borderColor: 'var(--border-bright)' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(var(--cyan-rgb), 0.14)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Sparkles size={12} /> STARTER LAUNCHPAD
            </span>
            <span className="text-xs" style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
              Visible while profile.starterMode = true
            </span>
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            Your site is live. Now team up with your AI agent to make it yours.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setCollapsed(prev => !prev)}
          className="btn-ghost text-xs py-1.5 px-3"
        >
          {collapsed ? (
            <>
              Show prompts <ChevronDown size={14} />
            </>
          ) : (
            <>
              Collapse <ChevronUp size={14} />
            </>
          )}
        </button>
      </div>

      {!collapsed && (
        <div className="mt-5">
          <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
            Open this project folder in your AI coding tool (Claude Code, Cursor, Codex, or Windsurf). Copy the prompts
            below in order: first shape your <strong style={{ color: 'var(--text)' }}>firstnamelastname.com</strong>{' '}
            personal brand, then brainstorm a live interactive project from things you are passionate about and watch
            your agent build it right before your eyes.
          </p>

          {/* 3-Step Journey Strip */}
          <div className="grid gap-3 sm:grid-cols-3 mb-6">
            <div
              className="p-4 rounded-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="kicker mb-1" style={{ color: 'var(--cyan)' }}>A. Get the Site On</div>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Watch live hot-reload
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                Keep this browser tab open side-by-side with your AI agent. Every change updates instantly.
              </p>
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="kicker mb-1" style={{ color: 'var(--cyan)' }}>B. Personal Brand</div>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Your firstnamelastname.com
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                Brainstorm what you want this site to be, what content to host, and how to tell your story in your own voice.
              </p>
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="kicker mb-1" style={{ color: 'var(--cyan)' }}>C. The AI &ldquo;Aha!&rdquo; Moment</div>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Brainstorm &amp; co-build a tool
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                Pick a hobby or obsession, brainstorm an interactive tool with your agent, and host it live on your site.
              </p>
            </div>
          </div>

          {/* Copyable Prompts */}
          <div className="grid gap-4 lg:grid-cols-2 mb-6">
            {starterPrompts.map(item => {
              const isCopied = copiedId === item.id
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl flex flex-col justify-between gap-4"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="kicker" style={{ color: 'var(--cyan)' }}>
                        {item.step}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.prompt)}
                        className="btn-ghost text-xs py-1 px-2.5"
                      >
                        {isCopied ? <Check size={13} /> : <Copy size={13} />}
                        {isCopied ? 'Copied!' : 'Copy Prompt'}
                      </button>
                    </div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
                      {item.goal}
                    </p>
                  </div>

                  <pre
                    className="p-3 rounded-lg text-xs whitespace-pre-wrap leading-relaxed"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {item.prompt}
                  </pre>
                </div>
              )
            })}
          </div>

          {/* Footer CTA bar inside launchpad */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 pt-4"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
              <Terminal size={14} style={{ color: 'var(--cyan)' }} />
              <span>
                More prompts live in <code style={{ color: 'var(--text)' }}>PROMPTS.md</code> and agent instructions in{' '}
                <code style={{ color: 'var(--text)' }}>CLAUDE.md</code>.
              </span>
            </div>
            <Link
              to="/work/passion-project-lab"
              className="text-xs font-semibold inline-flex items-center gap-1"
              style={{ color: 'var(--cyan)' }}
            >
              Try the interactive Passion-to-Project Lab <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
