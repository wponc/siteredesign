import PersonalScene from "../scenes/PersonalScene"
import { Canvas } from "@react-three/fiber"

export default function Personal() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ fov: 45 }}
      >
      <PersonalScene />
    </Canvas>

    <section>
      <h1>bio</h1>
      <p> I'm an FAA-licensed remote pilot passionate about cooking, data viz, and the environment. A fan of dogs to say the least. When I'm not pretending to be busy in front of a computer, I enjoy weightlifting and writing. I'm a Liverpool fan, so you could say things are going pretty well this year.</p>
    </section>

    <section>
      <h1>haloes!</h1>
    </section>

    <section>
      <h1>haleskarth!</h1>
    </section>
    
    <section>
      {/* <h1>bio</h1> */}
      <p>Over the past few years I've been slowly picking up the basics of web design, and I'm particularly fascinated with the world of creativity made possible by WebGL. If I keep learning and making mediocre websites in my spare time, by sheer probability I'll eventually make a decent one. Here's to hoping...</p>
    </section>



    <section>
      <p>This site was made with React-three-fiber, Vite, and Vercel. Much love to Bruno Simon for the Three.js Journey, Paul Henschel for the React-Three-Fiber ecosystem, and all the other contributors to the world of web design and graphics.</p>
    </section>
    </>
  )
}