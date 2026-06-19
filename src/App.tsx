import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, Particles } from '@abyssal/design-system'
import ScrollToTop from '@/components/ScrollToTop'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HomePage from '@/pages/HomePage'
import Work from '@/pages/Work'
import ProjectDetail from '@/pages/ProjectDetail'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      {/* Animated particle field + diagonal brand beam live behind everything. */}
      <Particles />
      <ScrollToTop />

      <a href="#main" className="skip-link">Skip to content</a>

      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
