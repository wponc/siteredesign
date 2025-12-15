import PersonalScene from "../scenes/PersonalScene"
import { Canvas } from "@react-three/fiber"

export default function Personal() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3, 5], fov: 50 }}
      >
      <PersonalScene />
    </Canvas>

    <section>
      <h1>Personal</h1>
      <p>Personal content goes here.</p>
    </section>
    </>
  )
}