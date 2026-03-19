import WorkScene from "../scenes/WorkScene"

export default function Work() {
  return (
    <>

    <WorkScene />

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

      <p>Sites & renders.
      Over the past few years I've been slowly picking up the basics of web design, and I'm particularly fascinated with the world of creativity made possible by WebGL. If I keep learning and making mediocre websites in my spare time, by sheer probability I'll eventually make a decent one. Here's to hoping...This site was made with React-three-fiber, Vite, and Vercel. Much love to Bruno Simon for the Three.js Journey, Paul Henschel for the React-Three-Fiber ecosystem, and all the other contributors to the world of web design and graphics</p>
    </section>
    </>
  )
}