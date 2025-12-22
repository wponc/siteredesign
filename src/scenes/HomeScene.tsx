
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

export function GlassWave() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(9, 6, 200, 200)
    return geo
  }, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const pos = geometry.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)

      // layered wave motion (slow + fast)
      const wave =
        Math.sin(x * 0.6 + t * 0.6) * 0.35 +
        Math.sin(y * 0.9 + t * 0.4) * 0.25 +
        Math.sin((x + y) * 0.4 + t * 0.3) * 0.15

      pos.setZ(i, wave)
    }

    pos.needsUpdate = true
    geometry.computeVertexNormals()

    // subtle breathing motion
    meshRef.current.rotation.x = -0.35 + Math.sin(t * 0.2) * 0.04
    meshRef.current.rotation.y = Math.sin(t * 0.15) * 0.05
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        transmission={1}
        thickness={1.2}
        roughness={0.03}
        ior={1.45}

        // dispersion
        chromaticAberration={0.9}

        // subtle internal warping
        distortion={0.15}
        distortionScale={0.3}
        temporalDistortion={0.15}

        // clarity & light response
        anisotropy={0.1}
        attenuationDistance={1.5}
        attenuationColor="#e8f6ff"

        // important for sharp highlights
        samples={10}
        resolution={512}
        backside
      />
    </mesh>
  )
}

export default function HomeScene() {
  return (
      <>
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[6, 8, 6]}
        intensity={1.4}
        color="#eaf6ff"
      />

      <directionalLight
        position={[-6, -4, -3]}
        intensity={0.35}
        color="#ffb3a7"
      />
      <GlassWave />
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment
        preset="sunset"
        background
        backgroundBlurriness={0.99}
      />
      
      {/* <Environment preset="sunset" background backgroundBlurriness={0.7} /> */}
     </>
  )
}
