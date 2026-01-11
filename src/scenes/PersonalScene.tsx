import { OrbitControls, Environment, Center, useGLTF, MeshTransmissionMaterial, Lightformer } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Group, MeshPhysicalMaterial } from "three"
import { useControls } from 'leva'

function Model(props) {
  const { nodes, materials } = useGLTF('/separatedProfileSmoothed.glb')
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}>
        <MeshTransmissionMaterial
          samples={8}
          resolution={16}
          transmission={1}
          roughness={0.2}
          thickness={0.8}
          chromaticAberration={0.7}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hair.geometry}
      >
      <meshPhysicalMaterial
        color="darkgray"
        metalness={0.9}
        roughness={0.2}
      />
      </mesh>
    </group>
  )
}

useGLTF.preload('/separatedProfileSmoothed.glb')

export default function PersonalScene() {
  const lightGroup = useRef<Group | null>(null);
  const l1 = useRef(null);
  
  // const lightformer1Position = useControls({'Lightformer1': [-.2, .5, -.1]})
  // const lightformer2Position = useControls({'Lightformer2': [0, 0, -.2]})
  // const lightformer3Position = useControls({'Lightformer3': [0, 2, 0]})
  useFrame((state) => {
    if (l1.current) {
      l1.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * .5
    }
  })

  return (
    <>
      <OrbitControls />
      <Model rotation={[0, -Math.PI * 1.1, .2]} />
        <Environment frames={1} resolution={256}>
          <Lightformer 
            color="#fff6f6" 
            position={[-1, -1, -1]} 
            form={'rect'} 
            ref={l1}
            intensity={5} 
          />
        </Environment>
    </>
  );
}