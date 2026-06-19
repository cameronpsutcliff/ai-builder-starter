import { useRef, useEffect, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
  alpha: number
}

function getParticleCount(): number {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0
  const cores = navigator.hardwareConcurrency ?? 4
  const isMobile = window.innerWidth < 768
  if (isMobile) return Math.min(Math.max(cores * 5, 40), 60)
  if (cores >= 16) return 160
  if (cores >= 8) return 120
  return 80
}

function readThemeColors(): { colors: string[]; alpha: number } {
  const s = getComputedStyle(document.documentElement)
  const colors = [
    s.getPropertyValue('--cyan').trim(),
    s.getPropertyValue('--purple').trim(),
    s.getPropertyValue('--green').trim(),
    s.getPropertyValue('--orange').trim(),
  ].filter(Boolean)
  const alpha = parseFloat(s.getPropertyValue('--particle-alpha').trim()) || 0.55
  return { colors: colors.length ? colors : ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'], alpha }
}

function hexToRgb(hex: string): string {
  let h = hex.replace('#', '')
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2]
  const n = parseInt(h, 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

function createParticles(count: number, w: number, h: number, colors: string[]): Particle[] {
  const speed = 14 // px/sec
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 2 * speed,
    vy: (Math.random() - 0.5) * 2 * speed,
    r: 0.4 + Math.random() * 2.1,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: -0.15 + Math.random() * 0.3,
  }))
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const [reducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    if (!canvas) return

    const count = getParticleCount()
    if (count === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let { colors, alpha: baseAlpha } = readThemeColors()

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initParticles = () => {
      particlesRef.current = createParticles(count, window.innerWidth, window.innerHeight, colors)
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resize()
        initParticles()
      }, 150)
    }

    resize()
    initParticles()

    const observer = new MutationObserver(() => {
      const updated = readThemeColors()
      colors = updated.colors
      baseAlpha = updated.alpha
      particlesRef.current.forEach(p => {
        p.color = colors[Math.floor(Math.random() * colors.length)]
      })
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1)
      lastTimeRef.current = time

      if (document.hidden) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      for (const p of particlesRef.current) {
        p.x += p.vx * dt
        p.y += p.vy * dt

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))

        const a = Math.max(0.05, Math.min(1, baseAlpha + p.alpha))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${a})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
      observer.disconnect()
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
