import { OrbitControls, Environment, MeshPortalMaterial, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState, useRef } from "react"
import { Vector3 } from "three"

function Card({ text, textPosition, meshPosition, planeArgs }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    const targetScale = hovered ? 1.1 : 1.0
    ref.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), delta * 7) // Adjust 5 for scaling speed
  })

  return (
    <group>
      <Text position={textPosition} fontSize={0.5} font="QuicksandRegular.ttf">
        {text}
      </Text>
      <mesh
        position={meshPosition}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        ref={ref}
      >
        <planeGeometry args={planeArgs} />
        <MeshPortalMaterial>
          {/* Portal scene with camera, lights, and objects */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <mesh position={[-2, 0, -4]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
          <mesh position={[2, 0, -4]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

export default function PersonalScene() {
  return (
    <>
      <Card
        text="experience"
        textPosition={[-2, -2, 0.01]}
        meshPosition={[-2, 0, 0]}
        planeArgs={[3, 5]}
      />
      <Card
        text="projects"
        textPosition={[2, 1, 0.01]}
        meshPosition={[2, 2, 0]}
        planeArgs={[3, 3]}
      />
      <Card
        text="renders"
        textPosition={[2, -3, 0.01]}
        meshPosition={[2, -2, 0]}
        planeArgs={[3, 3]}
      />
      <OrbitControls enableZoom={false} />
      <Environment preset="apartment" background />
    </>
  )
}