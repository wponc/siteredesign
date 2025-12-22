import HomeScene from "../scenes/HomeScene"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 1.8, 4], fov: 45 }}
        dpr={[1, 2]}
        // orthographic camera={{ zoom: 200, position:[5, 5, 5]}}
      >
      <HomeScene />
    </Canvas>

    <section>
      <h1>Home</h1>
      <p>Landing content goes here.</p>
    </section>
    </>
  )
}