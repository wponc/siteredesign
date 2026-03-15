import HomeScene from "../scenes/HomeScene"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <HomeScene />
    {/* <div style={{ width: "100vw", height: "100vh", position: "relative" }}> */}
      <div className={styles.landingTextContainer}>
        <h1 className={styles.landingText}>however you got here...</h1>
        <h1 className={styles.landingText}>I'm so glad you made it</h1>
        <h1 className={styles.landingText}>take a look around, stay a while</h1>
      </div>
    {/* </div> */}
    </>
  )
}