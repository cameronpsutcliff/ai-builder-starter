import { useState } from 'react'
import { Sparkles, Copy, Check, Sliders, Compass } from 'lucide-react'

interface PassionPreset {
  id: string
  label: string
  examples: Record<string, { title: string; summary: string; features: string[] }>
}

const PASSIONS: PassionPreset[] = [
  {
    id: 'fitness',
    label: 'Fitness & Training',
    examples: {
      calculator: {
        title: '1RM & Barbell Plate Loader',
        summary: 'Enter a lift weight and reps to estimate your 1-rep max, training percentages, and exact plates per side.',
        features: ['Epley & Brzycki 1RM formulas', 'Visual barbell plate breakdown (45/35/25/10/5/2.5 lb)', 'Warmup set generator'],
      },
      visualizer: {
        title: 'Weekly Volume & Recovery Map',
        summary: 'Interactive muscle-group volume dialer showing weekly sets vs. recovery sweet spots.',
        features: ['Sliders per movement pattern', 'Under/optimal/over-reaching zones', 'Exportable split summary'],
      },
      decision: {
        title: '30-Minute Workout Builder',
        summary: 'Pick your available gear and time window to generate a focused session on the spot.',
        features: ['Equipment filter (bodyweight, dumbbells, full rack)', 'Time-cap pacing calculator', 'Swap exercise button'],
      },
    },
  },
  {
    id: 'coffee-food',
    label: 'Coffee & Cooking',
    examples: {
      calculator: {
        title: 'Pour-Over & Espresso Ratio Dialer',
        summary: 'Slide coffee dose or water weight to lock in brew ratios, bloom water, and pour timestamps.',
        features: ['V60, Chemex, AeroPress, and Espresso presets', 'Live dose-to-water gram calculator', 'Interactive brew timer with pour cues'],
      },
      visualizer: {
        title: 'Pizza Dough Hydration & Fermentation Planner',
        summary: 'Dial in number of dough balls, style, room temp, and yeast type to get exact baker percentages.',
        features: ['Neapolitan, NY Style, and Detroit presets', 'Flour/water/salt/yeast gram breakdown', 'Proofing time estimator'],
      },
      decision: {
        title: 'Pantry Sauce & Flavor Matrix',
        summary: 'Pick a protein or base + cuisine vibe to build a balanced pan sauce or marinade from scratch.',
        features: ['Fat + acid + aromatics + heat balancer', 'Substitution guide', 'Scaling for 2 to 8 servings'],
      },
    },
  },
  {
    id: 'finance',
    label: 'Money & Investing',
    examples: {
      calculator: {
        title: 'Coast-FI & Freedom Number Simulator',
        summary: 'Adjust savings rate, current portfolio, and annual spend to see when work becomes optional.',
        features: ['Interactive age and return-rate sliders', 'Year-by-year compounding bar chart', 'Side-by-side scenario comparison'],
      },
      visualizer: {
        title: 'Buy vs. Rent Cashflow Explorer',
        summary: 'Compare true monthly ownership costs, opportunity cost of a down payment, and breakeven horizon.',
        features: ['Home price, rate, and maintenance sliders', 'Net worth delta timeline', 'Plain-English takeaway summary'],
      },
      decision: {
        title: 'Subscription & Fixed-Cost Audit Tool',
        summary: 'Plug in recurring expenses to see their 10-year compounded opportunity cost.',
        features: ['Quick expense chips', '10-year invested equivalent', 'Keep vs. cut score'],
      },
    },
  },
  {
    id: 'music-audio',
    label: 'Music & Audio',
    examples: {
      calculator: {
        title: 'BPM Delay, Reverb & Groove Calculator',
        summary: 'Tap or slide a tempo in BPM to get quarter, dotted-eighth, and triplet millisecond timings.',
        features: ['Tap-tempo button + BPM slider', 'Note-subdivision millisecond table', 'Pre-delay + decay time suggestions'],
      },
      visualizer: {
        title: 'Interactive Fretboard & Scale Explorer',
        summary: 'Pick any root note and scale mode to highlight intervals and chord shapes across the neck.',
        features: ['Root + mode selector (Major, Dorian, Pentatonic, Mixolydian)', 'Interval vs. note-name toggle', 'Chord progression builder'],
      },
      decision: {
        title: 'Practice Session Structure Generator',
        summary: 'Turn 20, 45, or 60 minutes into a balanced warmup, technique, repertoire, and ear-training block.',
        features: ['Time-block countdown timer', 'Skill focus weighting', 'Session streak tracker'],
      },
    },
  },
  {
    id: 'sports-outdoors',
    label: 'Sports & Outdoors',
    examples: {
      calculator: {
        title: 'Golf Bag Yardage Gap & Wedge Matrix',
        summary: 'Enter carry distances for your clubs to spot yardage gaps and build a 3-swing wedge distance chart.',
        features: ['Visual yardage ladder across all 14 clubs', 'Gap warning highlights (>15 yd)', '50% / 75% / 100% wedge swing matrix'],
      },
      visualizer: {
        title: 'Backpacking Pack Weight & Base-Weight Optimizer',
        summary: 'Toggle gear items across Big Three, clothing, and cook kit to see your base weight breakdown.',
        features: ['Category weight bar breakdown', 'Ounces-to-pounds live converter', 'Ultralight swap suggestions'],
      },
      decision: {
        title: 'Race Pace & Split Strategist',
        summary: 'Plan mile or kilometer splits for a 5K, 10K, half, or marathon with negative-split options.',
        features: ['Target finish time or pace input', 'Even vs. negative split toggle', 'Printable wrist-band pace table'],
      },
    },
  },
]

const FORMATS = [
  { id: 'calculator', label: 'Interactive Calculator / Dialer' },
  { id: 'visualizer', label: 'Visual Explorer / Simulator' },
  { id: 'decision', label: 'Planner / Generator Tool' },
] as const

type FormatId = (typeof FORMATS)[number]['id']

export default function PassionSparkDemo() {
  const [selectedPassionId, setSelectedPassionId] = useState<string>('fitness')
  const [customPassion, setCustomPassion] = useState<string>('')
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('calculator')
  const [copied, setCopied] = useState(false)

  // Quick interactive mini-sandbox state so the user can feel live React state in action
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(4)
  const [weeks, setWeeks] = useState<number>(12)

  const activePreset = PASSIONS.find(p => p.id === selectedPassionId) ?? PASSIONS[0]
  const activeIdea = activePreset.examples[selectedFormat]

  const generatedPrompt = customPassion.trim()
    ? `I am passionate about "${customPassion.trim()}". Help me brainstorm 3 fun, useful interactive tools or mini-apps around "${customPassion.trim()}" (especially a ${
        FORMATS.find(f => f.id === selectedFormat)?.label ?? 'calculator or visualizer'
      }) that we can build together right now. Once I pick my favorite, build it as an interactive React component in src/lab/, register it in src/lab/registry.tsx, and wire it into src/content/projects.ts so it runs live on my site.`
    : `Let's build the "${activeIdea.title}" interactive tool (${activeIdea.summary}) and host it right here on my site! Create a polished React component for it in src/lab/, register it in src/lab/registry.tsx, and wire it into src/content/projects.ts. Include these features: ${activeIdea.features.join(
        ', ',
      )}. Once the first version is live, let me test it in my browser so we can iterate on it together.`

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(generatedPrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Fallback if clipboard permission is blocked
    }
  }

  const totalHours = hoursPerWeek * weeks
  const shippedMilestones = Math.max(1, Math.floor(totalHours / 6))

  return (
    <div className="flex flex-col gap-6 my-8">
      {/* Main Interactive Idea Generator */}
      <div className="glass p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="kicker flex items-center gap-1.5" style={{ color: 'var(--cyan)' }}>
            <Sparkles size={13} /> Live Interactive Component (src/lab/PassionSparkDemo.tsx)
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
            Replace this with your own build
          </span>
        </div>

        <h2
          className="text-xl sm:text-2xl font-bold mb-2"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
        >
          Passion-to-Project Idea Lab
        </h2>
        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
          The fastest way to have an &ldquo;Aha!&rdquo; moment with AI is to pick something you genuinely care about and
          co-build a working tool around it. Pick an area below (or type your own obsession) to generate a build prompt
          for your AI agent.
        </p>

        {/* Step 1: Pick a passion */}
        <div className="mb-5">
          <p className="kicker mb-2.5">1. Pick something you nerd out on</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {PASSIONS.map(passion => {
              const isSelected = !customPassion.trim() && selectedPassionId === passion.id
              return (
                <button
                  key={passion.id}
                  type="button"
                  onClick={() => {
                    setCustomPassion('')
                    setSelectedPassionId(passion.id)
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  style={{
                    background: isSelected ? 'var(--cyan)' : 'var(--card)',
                    color: isSelected ? 'var(--bg)' : 'var(--text)',
                    border: `1px solid ${isSelected ? 'var(--cyan)' : 'var(--border)'}`,
                  }}
                >
                  {passion.label}
                </button>
              )
            })}
          </div>
          <input
            type="text"
            value={customPassion}
            onChange={e => setCustomPassion(e.target.value)}
            placeholder="Or type your own passion (e.g. woodworking, F1 strategy, sourdough, photography, marathon training)..."
            className="w-full px-3.5 py-2 rounded-lg text-sm"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
            }}
          />
        </div>

        {/* Step 2: Pick a tool shape */}
        <div className="mb-6">
          <p className="kicker mb-2.5">2. Pick an interactive format to host on your site</p>
          <div className="grid gap-2.5 sm:grid-cols-3">
            {FORMATS.map(format => {
              const isSelected = selectedFormat === format.id
              return (
                <button
                  key={format.id}
                  type="button"
                  onClick={() => setSelectedFormat(format.id)}
                  className="p-3 rounded-lg text-left text-sm font-medium transition-colors cursor-pointer"
                  style={{
                    background: isSelected ? 'var(--card-hover)' : 'var(--card)',
                    color: isSelected ? 'var(--cyan)' : 'var(--text)',
                    border: `1px solid ${isSelected ? 'var(--cyan)' : 'var(--border)'}`,
                  }}
                >
                  {format.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Idea Preview Card */}
        {!customPassion.trim() && (
          <div
            className="p-5 rounded-xl mb-6"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Compass size={16} style={{ color: 'var(--cyan)' }} />
              <span className="kicker">Example Project You Could Build in 5 Minutes</span>
            </div>
            <h3
              className="text-lg font-bold mb-1.5"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
            >
              {activeIdea.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
              {activeIdea.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeIdea.features.map(feat => (
                <span
                  key={feat}
                  className="text-xs px-2.5 py-1 rounded-md"
                  style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Generated Prompt to Copy */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="kicker">3. Copy this prompt and paste it to your AI agent</p>
            <button
              type="button"
              onClick={copyPrompt}
              className="btn-primary text-xs py-1.5 px-3"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied to clipboard!' : 'Copy Build Prompt'}
            </button>
          </div>
          <pre
            className="p-4 rounded-xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed overflow-x-auto"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {generatedPrompt}
          </pre>
        </div>
      </div>

      {/* Mini Momentum Calculator - demonstrates reactive sliders/metrics */}
      <div className="glass p-6">
        <div className="flex items-center gap-2 mb-2">
          <Sliders size={16} style={{ color: 'var(--cyan)' }} />
          <span className="kicker">Mini Sandbox: Side-Project Momentum Estimator</span>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
          Slide the numbers below to see how even a few focused hours a week with an AI coding partner compounds into shipped projects on your site.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-5">
          <label className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--muted)' }}>Hours per week experimenting</span>
              <span className="font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
                {hoursPerWeek} hrs/wk
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={hoursPerWeek}
              onChange={e => setHoursPerWeek(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--muted)' }}>Time horizon</span>
              <span className="font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
                {weeks} weeks
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={52}
              step={4}
              value={weeks}
              onChange={e => setWeeks(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="p-3.5 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="text-xs mb-1" style={{ color: 'var(--dim)' }}>Total creative time</div>
            <div className="text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
              {totalHours} hours
            </div>
          </div>
          <div className="p-3.5 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="text-xs mb-1" style={{ color: 'var(--dim)' }}>Interactive tools shipped</div>
            <div className="text-xl font-bold" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>
              ~{shippedMilestones} live builds
            </div>
          </div>
          <div className="p-3.5 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="text-xs mb-1" style={{ color: 'var(--dim)' }}>Hosted at</div>
            <div className="text-sm font-bold truncate pt-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
              /work/your-next-idea
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
