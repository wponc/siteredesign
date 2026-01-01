import PersonalScene from "../scenes/PersonalScene"
import { Canvas } from "@react-three/fiber"

export default function Personal() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
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