import { OrbitControls, Environment, MeshPortalMaterial, Text, Edges, Gltf, Stars, Lightformer } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState, useRef } from "react"
import { Vector3 } from "three"
import { easing } from "maath"

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x * 0.5, state.pointer.y * 0.5, 5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}

function Card({ text, textPosition, meshPosition, planeArgs, modelPath, children }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    const targetScale = hovered ? 1.1 : 1.0
    ref.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), delta * 5) 
  })

  const handleClick = () => {
    const sectionId = text === 'experience' ? 'work' : text // Map 'experience' to 'work'
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <group>
      <Text position={textPosition} fontSize={0.3} font="Hedvig-18-Reg.ttf">
        {text}
      </Text>
      <mesh
        position={meshPosition}
        onPointerOver={() => {
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={handleClick}
        ref={ref}
      >
      <Edges
        linewidth={3}
        color="white"
      />
        <planeGeometry args={planeArgs} />
        <MeshPortalMaterial>
          {children}
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
        textPosition={[-2, -3.15, -.99]}
        meshPosition={[-2, 0, -1]}
        planeArgs={[3, 7]}
        modelPath=""
      >
        <Gltf src="ICESat2.glb" scale={0.3} rotation={[Math.PI / 4, Math.PI / 4, 0]}/>
        <Environment preset="dawn" />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Card>
      <Card
        text="projects"
        textPosition={[2, .85, -.99]}
        meshPosition={[2, 2, -1]}
        planeArgs={[3, 3]}
      >
        <Gltf src="tree.glb" position={[0, -1, 0]} scale={0.15} />
        <Environment preset="park" />
      </Card>
      <Card
        text="creative"
        textPosition={[2, -3.15, -.99]}
        meshPosition={[2, -2, -1]}
        planeArgs={[3, 3]}
      />
      <OrbitControls enableZoom={false} />
      {/* <Environment preset="apartment" /> */}
      <CameraRig />
    </>
  )
}