import { OrbitControls, Environment, Center, useGLTF, MeshTransmissionMaterial, Lightformer } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from 'leva'
import { easing } from 'maath'


function Model(props) {
  const { nodes, materials } = useGLTF('/models/heeadProfileSmoothedCompressed.glb')
  console.log('nodes', nodes)
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}>
           <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={256}
          transmission={1}
          roughness={0.1}
          clearcoat={1}
          thickness={0.8}
          chromaticAberration={0.4}
          anisotropy={1}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/heeadProfileSmoothedCompressed.glb')

export default function PersonalScene() {

  useFrame((state, delta) => { 
    easing.damp3(state.camera.position, [state.pointer.x, state.pointer.y + 1, 3], .5, delta) 
    state.camera.lookAt(0, 0, 0) 
  })
  
  
  const lightformersRef = useRef(null)

  const lightformer1Position = useControls({'Lightformer1Position': { value: [-1.5, 1.5, 1], step: 0.1 }})
  const lightformer2Position = useControls({'Lightformer2Position': { value: [2, -1, 1.5], step: 0.1 }})
  const lightformer3Position = useControls({'Lightformer3Position': { value: [0, 2, -1], step: 0.1 }})
  const lightformer4Position = useControls({'Lightformer4Position': { value: [-2, -1.5, 4], step: 0.1 }})


  return (
    <>
      <color attach="background" args={['#0C0C0C']} />
      {/* <OrbitControls /> */}
      <Model rotation={[0, -Math.PI, .2]} />
      <group ref={lightformersRef}>
        
        <Environment frames={1} resolution={512}>
          <Lightformer 
            color="ffffff" 
            position={lightformer1Position.Lightformer1Position} 
            form={'rect'} 
            intensity={2}
            scale={[2, 2, 1]}
            />
          <Lightformer 
            color="88aaff" 
            position={lightformer2Position.Lightformer2Position} 
            form={'rect'} 
            intensity={2}
            scale={[2, 2, 1]}
            />
          <Lightformer 
            color="ffccaa" 
            position={lightformer3Position.Lightformer3Position} 
            form={'circle'} 
            intensity={2}
            scale={1.5}
            />
          <Lightformer 
            color="white" 
            position={lightformer4Position.Lightformer4Position} 
            form={'rect'} 
            intensity={2}
            scale={[1.5, 1.5, 1]}
            />
            {/* <Lightformer
              position={[0,0,5]}
              scale={[10,10,1]}
              intensity={1}
              color="white"
            /> */}
        </Environment>
      </group>
    </>
  );
}