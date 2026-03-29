import WorkScene from "../scenes/WorkScene"

export default function Work() {
  return (
    <>
      {/* 3D SCENE */}
      {/* the overlay should sit on top of the work scene in a semi-transparent frame and disappear after 10 seconds or on click */}
      {/* <h1 className="workOverlay"> ?
        I thought of my experiences–academic, professional, and extracurricular–more as a map rather than a timeline: a web interconnected of nodes, each node the natural progression from those surrounding it, and informing those yet to develop. Click on the nodes in the map below to learn more about my experiences.
      </h1> */}
      <WorkScene />
      {/* SHOWREEL SECTION */}
      {/* <Showreel /> */}
      {/* CREATIVE SECTION */}
      <section id="creative">
        {/* THE SHOWREEL SHOULD BE FIRST */}
        <h1>Projects</h1>
          <h2>Renders</h2> 
            <h3>Renders</h3>
            <h3>What You See Here</h3>
            <h3>Mini Sites</h3>
            <p>
              
            </p>
          <h2>What you see here</h2>
            <p>
              
            </p>
          <h2>Mini-sites</h2> 
            <p>
              
            </p>
      </section>
    </>
  )
}

const projects = {
  // renders
  "Renders": "I'm also becoming more proficient with Blender, following tutorials and memorizing the shortcuts one by one. I'm particularly interested in how light plays off of surfaces to generate refraction, chromatic aberration, and distortion. Moving forward, I'd like to get more adept at 'worldbuilding', and create expansive scenes that are convincing in their composition but maintain a sense of surreality. One of my favorite tricks for presentations is to use text-only slides as an alpha map for planes in Blender scenes, and bring the final renders into Powerpoint to amplify a presentation’s content", 
  // this site
  "What You See Here": "This site was made with React-three-fiber, Vite, and Vercel. Much love to Bruno Simon for the Three.js Journey, Paul Henschel for the React-Three-Fiber ecosystem, and all the other contributors to the world of web design and graphics",
  // mini sites
  "Mini Sites": "Practice, practice, practice. In an effort to get more comfortable with web design, I've presented a number of academic and work projects using static sites. To me, a website's landing page can grab the viewer's attention in a way that presentation slides might no"
}