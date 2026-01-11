import HomeScene from "../scenes/HomeScene"
import { Canvas } from "@react-three/fiber"
import styles from "../styles/Home.module.css"

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
      
      <div className={styles.landingTextContainer}>
        <h1 className={styles.landingText}>however you got here...</h1>
        <h1 className={styles.landingText}>I'm so glad you made it</h1>
        <h1 className={styles.landingText}>take a look around, stay a while</h1>
      </div>
    </div>
    </>
  )
}