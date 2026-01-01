import HomeScene from "../scenes/HomeScene"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <>
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 1.8, 4], fov: 45 }}
          dpr={[1, 2]}
          >
        <HomeScene />
      </Canvas>
      
      <div className="landing-text-container">
        <h1 className="landing-text">however you got here...</h1>
        <h1 className="landing-text">I'm so glad you made it</h1>
      </div>
    </div>
    </>
  )
}