import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Environment, useGLTF } from "@react-three/drei"
import { easing } from "maath"

const PARTICLE_COUNT = 50000
const STREAM_WIDTH = 20
const STREAM_HEIGHT = 0.6
const STREAM_DEPTH = 10
const PARTICLE_SIZE = 0.015

const FLOW_SPEED = 0.001
const DISPLACEMENT_RADIUS = 0.8
const DISPLACEMENT_FORCE = 0.1

export default function ParticleStream() {

  const particlesRef = useRef<THREE.Points>(null!)
  const boxRef = useRef(null!)

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      positions[i3]     = (Math.random() - 0.5) * STREAM_WIDTH
      positions[i3 + 1] = (Math.random() - 0.5) * STREAM_HEIGHT
      positions[i3 + 2] = (Math.random() - 0.5) * STREAM_DEPTH

      velocities[i3]     = FLOW_SPEED
      velocities[i3 + 1] = 0
      velocities[i3 + 2] = 0
    }

    return { positions, velocities }
  }, [])

  useFrame((state, delta) => {
    if (!particlesRef.current || !boxRef.current) return
    easing.damp3(boxRef.current.position, [state.pointer.x - 0.2, 0, -state.pointer.y], 0.3, delta)

    const posAttr = particlesRef.current.geometry.attributes.position
    const pos = posAttr.array as Float32Array
    
    // Get the cube's position
    const cubePos = boxRef.current.position

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      let px = pos[i3]
      let py = pos[i3 + 1]
      let pz = pos[i3 + 2]

      let vx = velocities[i3]
      let vy = velocities[i3 + 1]
      let vz = velocities[i3 + 2]

      /* -------- Distance to cube check -------- */
      const dx = px - cubePos.x
      const dy = py - cubePos.y
      const dz = pz - cubePos.z
      const distSq = dx * dx + dy * dy + dz * dz

      // If particle is within range of the cube
      if (distSq < DISPLACEMENT_RADIUS * DISPLACEMENT_RADIUS) {
        const dist = Math.sqrt(distSq) + 0.0001
        const force = (1 - dist / DISPLACEMENT_RADIUS) * DISPLACEMENT_FORCE

        // Direction from cube center to particle
        const nx = dx / dist
        const ny = dy / dist
        const nz = dz / dist

        // Push particles away from the cube
        vx += nx * force
        vy += ny * force
        vz += nz * force
        
        // Add some swirl effect
        vy += nz * force * 0.5
        vz -= ny * force * 0.5
      }

      /* -------- Physics Integration -------- */
      vx += FLOW_SPEED
      vx *= 0.98 // Damping
      vy *= 0.95
      vz *= 0.95

      px += vx
      py += vy
      pz += vz

      /* -------- Respawn Logic -------- */
      if (px > STREAM_WIDTH / 2) {
        px = -STREAM_WIDTH / 2
        py = (Math.random() - 0.5) * STREAM_HEIGHT
        pz = (Math.random() - 0.5) * STREAM_DEPTH
        vx = FLOW_SPEED
        vy = 0
        vz = 0
      }

      // Write back to arrays
      velocities[i3] = vx
      velocities[i3 + 1] = vy
      velocities[i3 + 2] = vz
      pos[i3] = px
      pos[i3 + 1] = py
      pos[i3 + 2] = pz
    }

    posAttr.needsUpdate = true
  })
  return (
    <>
      <mesh ref={boxRef} scale={0.5}>
        <sphereGeometry/>
        <meshBasicMaterial color={'black'} />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={PARTICLE_SIZE}
          color="#ffffff"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <Environment preset="studio" />
    </>
  )
}
