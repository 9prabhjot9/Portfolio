"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Sphere, Stars } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

export function HeroScene() {
  const sphereRef = useRef<THREE.Mesh>(null)

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere ref={sphereRef} args={[1, 64, 64]}>
            <meshStandardMaterial
              color="#2dd4bf"
              roughness={0.4}
              metalness={0.8}
              emissive="#2dd4bf"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

