import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useGLTF, OrbitControls } from "@react-three/drei"

const PARTICLE_COUNT = 10000
const STREAM_WIDTH = 20
const STREAM_HEIGHT = 1
const STREAM_DEPTH = 10
const PARTICLE_SIZE = 0.01

const FLOW_SPEED = 0.0001
const DISPLACEMENT_RADIUS = 1.5
const DISPLACEMENT_FORCE = 0.25

function ParticleStream() {
  const particlesRef = useRef<THREE.Points>(null!)
  const handRef = useRef<THREE.Group>(null!)

  const { scene } = useGLTF("monkey.glb")

  /* ---------------------------------------------
   * Fix GLB materials / normals so hand is visible
   * --------------------------------------------- */
  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh
        mesh.geometry.computeVertexNormals()
        mesh.material = new THREE.MeshNormalMaterial()
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })
  }, [scene])

  /* ---------------------------------------------
   * Initialize particles
   * --------------------------------------------- */
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

  /* ---------------------------------------------
   * Animate hand (slow breathing motion)
   * --------------------------------------------- */
  useFrame((state) => {
    if (!handRef.current) return
    handRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    handRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
  })

  /* ---------------------------------------------
   * Animate particles
   * --------------------------------------------- */
  useFrame((state) => {
    if (!particlesRef.current) return

    const posAttr = particlesRef.current.geometry.attributes.position
    const pos = posAttr.array as Float32Array
    const handPos = handRef.current?.position ?? new THREE.Vector3()

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      const px = pos[i3]
      const py = pos[i3 + 1]
      const pz = pos[i3 + 2]

      const dx = px - handPos.x
      const dy = py - handPos.y
      const dz = pz - handPos.z

      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

      let vx = velocities[i3]
      let vy = velocities[i3 + 1]
      let vz = velocities[i3 + 2]

      /* ---- Hand interaction ---- */
      if (dist < DISPLACEMENT_RADIUS && dist > 0.0001) {
        const t = 1 - dist / DISPLACEMENT_RADIUS
        const smooth = t * t * (3 - 2 * t)   // smoothstep

        const nx = dx / dist
        const ny = dy / dist
        const nz = dz / dist

        // Remove inward velocity component
        const dot = vx * nx + vy * ny + vz * nz
        vx -= dot * nx * smooth * DISPLACEMENT_FORCE
        vy -= dot * ny * smooth * DISPLACEMENT_FORCE
        vz -= dot * nz * smooth * DISPLACEMENT_FORCE

        // Curl / wrapping effect
        const curlY = nz
        const curlZ = -ny
        vy += curlY * smooth * 0.02
        vz += curlZ * smooth * 0.02
      }

      /* ---- Forward flow ---- */
      vx += FLOW_SPEED

      /* ---- Subtle noise ---- */
      vy += Math.sin(px * 0.5 + state.clock.elapsedTime) * 0.0001

      /* ---- Damping ---- */
      vx *= 0.99
      vy *= 0.96
      vz *= 0.96

      /* ---- Integrate ---- */
      let x = px + vx
      let y = py + vy
      let z = pz + vz

      /* ---- Respawn ---- */
      if (x > STREAM_WIDTH / 2) {
        x = -STREAM_WIDTH / 2
        y = (Math.random() - 0.5) * STREAM_HEIGHT
        z = (Math.random() - 0.5) * STREAM_DEPTH

        vx = FLOW_SPEED
        vy = 0
        vz = 0
      }

      velocities[i3]     = vx
      velocities[i3 + 1] = vy
      velocities[i3 + 2] = vz

      pos[i3]     = x
      pos[i3 + 1] = y
      pos[i3 + 2] = z
    }

    posAttr.needsUpdate = true
  })

  return (
    <>
      {/* Hand */}
      <group ref={handRef} scale={0.4}>
        <primitive object={scene.clone()} />
      </group>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={PARTICLE_SIZE}
          color="#ffffff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  )
}

export default function WritingScene() {
  return (
    <> 
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={3} />

      <ParticleStream />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )}

useGLTF.preload("monkey.glb")
