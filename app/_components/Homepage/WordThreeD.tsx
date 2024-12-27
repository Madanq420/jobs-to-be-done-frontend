import * as THREE from 'three'

import React, { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      fog: any
      group: any 
    }
  }
}
interface WordProps {
  children: React.ReactNode
  position: [number, number, number]
}

// Word Component
function Word({ children, ...props }: WordProps) {
  const color = new THREE.Color()
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  }

  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const over = (e: any) => {
    e.stopPropagation()
    setHovered(true)
  }
  const out = () => setHovered(false)

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])

  // Tie component to the render-loop
  useFrame(() => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshStandardMaterial
      material.color.lerp(color.set(hovered ? '#0081ab' : '#333'), 0.1)
    }
  })

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  )
}


// Updated Props interface for Cloud
interface CloudProps {
  words: string[] // Array of strings to display
  radius?: number,
  count?: number
}

// Updated Cloud Component
function Cloud({count = 8, words, radius = 20 }: CloudProps) {
  const positions = useMemo(() => {
    const temp: THREE.Vector3[] = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        if (temp.length >= words.length) break 
        const position = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        )
        temp.push(position)
      }
    }
    return temp
  }, [count, radius, words.length])

  return positions.map((pos, index) => (
    <Word key={index} position={pos.toArray() as [number, number, number]}>
      {words[index]} 
    </Word>
  ))
}

  // Define your custom words
export default function WordThreeD() {

  const customWords = [
    "Customer",
    "Needs",
    "Outcomes",
    "Innovation",
    "Goals",
    "Insights",
    "Problems",
    "Solutions",
    "Jobs",
    "Tasks",
    "Automation",
    "Personalization",
    "Efficiency",
    "Optimization",
    "Value",
    "Proposition",
    "Discovery",
    "Context",
    "Design",
    "Feedback",
    "Business",
    "Points",
    "Growth",
    "Learning",
    "Experience",
    "Customer-Centric",
    "Emotional",
    "Functional",
    "Social",
    "Satisfaction",
    "User",
    "Behavior",
    "Performance",
    "Metrics",
    "Productivity",
    "Machine",
    "Natural",
    "Predictive",
    "Decision-Making",
    "Adaptability",
    "Insights",
    "Automation",
    "Data-Driven",
    "Problem-Solving",
    "Context-Aware",
    "Generative",
    "Tools",
    "Retention",
    "Execution",
    "Success",
    "Engagement",
    "Outcome",
    "Systems",
    "Usability",
    "Impact",
    "Alignment",
    "Iteration",
    "Retention",
    "Journey"
  ];

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#000000e4', 0, 80]} />

      <Suspense fallback={null}>
        {/* Rotating Group */}
        <group rotation={[10, 10.5, 10]}>
          <Cloud words={customWords} radius={18} count={6} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}
