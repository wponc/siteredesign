import HomeScene from "../scenes/HomeScene"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3, 5], fov: 50 }}
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