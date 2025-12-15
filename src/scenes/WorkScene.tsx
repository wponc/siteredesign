import { OrbitControls, Environment } from "@react-three/drei"

export default function PersonalScene() {
  return (
    <>
      <directionalLight intensity={1} />
      <mesh>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls enableZoom={false}/>
      <Environment preset="apartment" background/>
    </>
  )
}
