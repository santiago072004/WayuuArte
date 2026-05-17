'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function WayuuPattern({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
        />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position, color, size = 0.5 }: { position: [number, number, number], color: string, size?: number }) {
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <Sphere args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f59e0b" />
      
      {/* Wayuu-inspired floating elements */}
      <WayuuPattern position={[-3, 1, -2]} color="#dc2626" speed={0.8} />
      <WayuuPattern position={[3, -1, -3]} color="#0891b2" speed={1.2} />
      <WayuuPattern position={[0, 2, -4]} color="#f59e0b" speed={1} />
      
      <FloatingSphere position={[-2, -1.5, -1]} color="#dc2626" size={0.3} />
      <FloatingSphere position={[2, 1.5, -2]} color="#0891b2" size={0.4} />
      <FloatingSphere position={[1, -2, -1.5]} color="#f59e0b" size={0.25} />
      <FloatingSphere position={[-1.5, 2, -2.5]} color="#10b981" size={0.35} />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
