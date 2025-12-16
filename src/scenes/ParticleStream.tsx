

export default function ParticleStream() {
  const particlesRef = useRef<THREE.Points>(null!)
  const handRef = useRef<THREE.Group>(null!)

  // Load hand model (using a simple sphere as fallback)
//   const { scene } = useGLTF("public/hand.gltf")

  // Initialize particle positions and velocities
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      positions[i3] = (Math.random() - 0.5) * STREAM_WIDTH
      positions[i3 + 1] = (Math.random() - 0.5) * STREAM_HEIGHT
      positions[i3 + 2] = (Math.random() - 0.5) * STREAM_DEPTH

      velocities[i3] = FLOW_SPEED
      velocities[i3 + 1] = 0
      velocities[i3 + 2] = 0
    }

    return { positions, velocities }
  }, [])

  // Animate hand
  useFrame((state) => {
    if (handRef.current) {
      handRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      handRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })

  // Animate particles
  useFrame(() => {
    if (!particlesRef.current || !handRef.current) return

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const handPosition = handRef.current.position

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      // Get particle position
      let x = positions[i3]
      let y = positions[i3 + 1]
      let z = positions[i3 + 2]

      // Calculate distance from hand
      const dx = x - handPosition.x
      const dy = y - handPosition.y
      const dz = z - handPosition.z
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

      // Apply displacement force if particle is near hand
      const handRadius = 1.5
      if (distance < handRadius && distance > 0.1) {
        const force = (1 - distance / handRadius) * DISPLACEMENT_FORCE
        const nx = dx / distance
        const ny = dy / distance
        const nz = dz / distance

        velocities[i3] += nx * force * 0.1
        velocities[i3 + 1] += ny * force * 0.1
        velocities[i3 + 2] += nz * force * 0.1
      }

      velocities[i3] += FLOW_SPEED

      // Apply damping
      velocities[i3] *= 0.98
      velocities[i3 + 1] *= 0.95
      velocities[i3 + 2] *= 0.95

      // Update position
      x += velocities[i3]
      y += velocities[i3 + 1]
      z += velocities[i3 + 2]

      if (x > STREAM_WIDTH / 2) {
        x = -STREAM_WIDTH / 2
        y = (Math.random() - 0.5) * STREAM_HEIGHT
        z = (Math.random() - 0.5) * STREAM_DEPTH
        velocities[i3] = FLOW_SPEED
        velocities[i3 + 1] = 0
        velocities[i3 + 2] = 0
      }

      if (Math.abs(z) > STREAM_DEPTH / 2) {
        velocities[i3 + 2] *= -0.5
      }
      if (Math.abs(y) > STREAM_HEIGHT / 2) {
        velocities[i3 + 1] *= -0.5
      }

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <>
      {/* <group ref={handRef} position={[0, 0, 0]} scale={0.5}>
        <primitive object={scene.clone()} />
      </group> */}

      {/* Particle System */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
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

// Preload the model
// useGLTF.preload("public/hand.gltf")