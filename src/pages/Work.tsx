import WorkScene from "../scenes/WorkScene"
import { Canvas } from "@react-three/fiber"

export default function Work() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3, 5], fov: 50 }}
      >
      <WorkScene />
    </Canvas>

    <section>
      <h1>Work</h1>
      <p>Work content goes here.</p>
    </section>
    </>
  )
}