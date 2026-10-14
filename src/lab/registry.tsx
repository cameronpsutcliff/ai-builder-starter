import type { ComponentType } from 'react'
import PassionSparkDemo from './PassionSparkDemo'

// ════════════════════════════════════════════════════════════════
//  INTERACTIVE LAB REGISTRY
//  When you and your AI agent build an interactive tool, calculator,
//  visualizer, or mini-app in src/lab/, register it here with a key
//  and set `interactiveId: 'your-key'` on the project in
//  src/content/projects.ts. It will render live on that project page!
// ════════════════════════════════════════════════════════════════

export const interactiveLabRegistry: Record<string, ComponentType> = {
  'passion-spark-demo': PassionSparkDemo,
}
