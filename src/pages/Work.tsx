import WorkScene from "../scenes/WorkScene"
import { Canvas } from "@react-three/fiber"
import { Preload } from "@react-three/drei"

export default function Work() {
  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
      >
      <WorkScene />
      <Preload all />
    </Canvas>

    <section id="work">
      <h1>Work</h1>
      <p>Actual work experience.</p>
    </section>
    <section id="projects">
      <h1>Projects</h1>
      <p>Projects go here.</p>
    </section>
    <section id="creative">
      <h1>Creative</h1>
      <p>Sites & renders.</p>
    </section>
    </>
  )
}