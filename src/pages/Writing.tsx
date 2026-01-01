import WritingScene from "../scenes/WritingScene"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation } from "@react-three/postprocessing";


export default function Writing() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 5, 1]}}
      >
      <WritingScene />
    </Canvas>
    <section>
      <h1>Writing</h1>
      <p>Writing content goes here.</p>
    </section>

    <section>
      <h1>Books</h1>

      <div className="book" id='swannsway'>
        <h2>In Search of Lost Time Volume I: Swann's Way</h2>
        <p>Writing content goes here.</p>
        <br />
        
      </div>

      <div className="book" id='recognitions'>
        <h2>The Recogitions</h2>
        <p>Writing content goes here.</p>
        <br />

      </div>

      <div className="book" id='lonesomedove'>
        <h2>Lonesome Dove</h2>
        <p>Writing content goes here.</p>
        <br />

      </div>

      <div className="book" id='paleking'>
        <h2>The Pale King</h2>
        <p>Writing content goes here.</p>
        <br />

      </div>

      <div className="book" id='plains'>
        <h2>The Plains</h2>
        <p>Writing content goes here.</p>
        <br />

      </div>

      <div className="book" id='road'>
        <h2>The Road</h2>
        <p>Writing content goes here.</p>
        <br />

      </div>

      <div className="book" id='stoner'>
        <h2>Stoner</h2>
        <p>Writing content goes here.</p>
        <br />
        
      </div>

    </section>

    <section>
      <h1>Essays</h1>
      
        <div className="essay" id='straits'>
          
        </div>
        
        <div className="essay" id='favor'>
          <p>Writing content goes here.</p>
          
        </div>`

    </section>

    <section>
      <h1>Scraps</h1>

      <p>Writing content goes here.</p>
    </section>

    </>
  )
}