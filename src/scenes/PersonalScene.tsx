import { OrbitControls, Environment, useGLTF, Cloud, useAnimations, Text } from "@react-three/drei"
import { useRef, useEffect } from "react"

export default function PersonalScene() {
  return (
    <>
      <OrbitControls />
      {/* <Environment preset="studio"/> */}
      {/* <ambientLight /> */}
      {/* <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" position={[0, 0, 4]}/>  */}
      {/* <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} /> */}
      {/* Neon-glowing text elements in billboard fashion */}
      <Text
        position={[-1, 0, 5]}
        fontSize={0.5}
        color="cyan"
        emissive="cyan"
        emissiveIntensity={4}
        billboard
      >
        NEON TEXT 1
      </Text>
      <Text
        position={[2, 0, 4]}
        fontSize={0.4}
        color="magenta"
        emissive="magenta"
        emissiveIntensity={3}
        billboard
      >
        NEON TEXT 2
      </Text>
    </>
  );
}