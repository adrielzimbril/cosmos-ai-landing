"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <GrainGradient
      style={{ height: "100%", width: "100%" }}
      colorBack="hsl(0, 0%, 0%)"
      softness={0.76}
      intensity={0.45}
      noise={0}
      shape="corners"
      colors={["hsl(14, 100%, 57%)", "hsl(45, 100%, 51%)", "hsl(340, 82%, 52%)"]}
    />
  )
}
