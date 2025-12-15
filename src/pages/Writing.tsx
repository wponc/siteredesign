import WritingScene from "../scenes/WritingScene"
import { Canvas } from "@react-three/fiber"

export default function Writing() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3, 5], fov: 50 }}
      >
      <WritingScene />
    </Canvas>

    <section>
      <h1>Writing</h1>
      <p>Writing content goes here.</p>
    </section>
    </>
  )
}