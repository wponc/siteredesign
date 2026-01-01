
import { useRef, useMemo, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, OrbitControls, Environment, Lightformer} from "@react-three/drei"

export default function HomeScene() {
  const meshRef = useRef(null)

  const randomRotation = useRef([
    Math.random() * Math.PI * 2, // Random X-axis rotation
    Math.random() * Math.PI * 2, // Random Y-axis rotation
    Math.random() * Math.PI * 2, // Random Z-axis rotation
  ]);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05
      meshRef.current.rotation.y += delta * 0.03
    }
  })

  return(
    <>
      <color args={['black']} attach='background' /> 
      <Environment>
        <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-1, 1, -1]} scale={[4, 0.1, 1]} color={'white'}/>
        <Lightformer intensity={4}rotation-y={Math.PI / 2} position={[-2, -1, -1]} scale={[3, 0.5, 1]} color={'white'}/>
        <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[2, 1, 0]} scale={[4, 1, 1]} color={'white'}/>
      </Environment> 

      <mesh ref={meshRef} rotation={randomRotation.current}>
        <torusKnotGeometry args={[4, .3, 128, 16]} />
        <MeshTransmissionMaterial
          backside
          samples={2}
          resolution={64}
          transmission={1}
          roughness={0.1}
          clearcoat={1}
          thickness={0.8}
          chromaticAberration={0.9}
          anisotropy={1}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>

      {/* <OrbitControls /> */}
    </>
  )
}

