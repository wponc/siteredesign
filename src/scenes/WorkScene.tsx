import { OrbitControls, Environment, Center, useGLTF, MeshTransmissionMaterial, Lightformer, useCursor, Preload, Line } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber"
import React, { useState, useRef } from "react"
import { Vector3 } from "three"
import { easing } from "maath"


export default function WorkScene() {
  return (
  <Canvas
    style={{ width: "100vw", height: "100vh", position: "relative" }}
    camera={{ position: [0, 1, 1], fov: 50 }}
    gl={{ antialias: true, alpha: true }}
  >
    <Scene />
    
    <Preload all />
  </Canvas>
  )
}

function Scene(){
  return(
    <>
    {/* <Environment preset="sunset" /> */}
      <Environment>
        {/* <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-1, 1, -1]} scale={[4, 0.1, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4}rotation-y={Math.PI / 2} position={[-2, -1, -1]} scale={[3, 0.5, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[2, 1, 0]} scale={[4, 1, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[0, -3, 3]} scale={[4, 1, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[-3, -3, 0]} scale={[4, 1, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[3, -3, 0]} scale={[4, 1, 1]} color={'white'}/> */}
        {/* <Lightformer intensity={4} rotation-y={-Math.PI / 2} position={[0, -3, -3]} scale={[4, 1, 1]} color={'white'}/> */}
        <Lightformer intensity={4} position={[0, 3,0 ]} scale={[4, 1, 1]} color={'white'}/>
        <Lightformer intensity={4} position={[0, 3,0 ]} scale={[4, 1, 1]} color={'white'}/>
      </Environment> 
    <Model/>
    <OrbitControls />
    </>
  )
}

function Cone({ geometry, material, name, ...props }) {
  const [hovered, setHovered] = useState(false);
  const coneRef = useRef();
  const basePosition = useRef(props.position); // store original position once

  useFrame((state, delta) => {
    easing.damp3(
      coneRef.current.scale,
      hovered ? [0.09, 0.09, 0.09] : [0.069, 0.069, 0.069],
      0.1,
      delta
    );
    easing.damp3(
      coneRef.current.position,
      hovered
        ? [basePosition.current[0], basePosition.current[1] + 0.075, basePosition.current[2]]
        : basePosition.current,
      0.3,
      delta
    );
  });

  return (
    <mesh
      ref={coneRef}
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
      onPointerOver={() => {
        setHovered(true)
        console.log("Hover over ")
        console.log(`Cone position: ${coneRef.current.position}`)
      }}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        // setActive(true)
        console.log(`cone ${name} clicked`)
      }}
      {...props}
    />
  );
}

function Model(props) {
  const { nodes } = useGLTF('public/models/terrainWithCones2.glb');
  const landscapeRef = useRef();
  const coneProps = [
    { name: 'Cone1', position: [0.18,  0.912,  0.424] },
    { name: 'Cone2', position: [-0.011, 0.75,  -0.061] },
    { name: 'Cone3', position: [0.331,  0.696, -0.496] },
    { name: 'Cone4', position: [-0.203, 0.703,  0.297] },
    { name: 'Cone5', position: [-0.275, 0.57,  -0.352] },
  ];
  useFrame((state, delta) => {
    // example: scale up on hover
    landscapeRef.current.rotation.y += delta * 0.03
  });
  console.log('Cone 1 props', coneProps[0].position)
  
  return (
    <>
    <group {...props} dispose={null} scale={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape.geometry}
        material={nodes.Landscape.material}
        ref={landscapeRef}
        >
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={256}
          transmission={1}
          roughness={0.1}
          clearcoat={1}
          thickness={0.9}
          chromaticAberration={0.4}
          anisotropy={1}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
        </mesh>
      {coneProps.map(({ name, position }) => (
        <Cone
        key={name}
          name={name}
          geometry={nodes[name].geometry}
          material={nodes[name].material}
          position={position}
          rotation={[0, 0, Math.PI]}
          scale={0.069}
          // index={1}
          />
      ))}
    <Line 
      points={[coneProps[0].position, coneProps[1].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[0].position, coneProps[2].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[0].position, coneProps[3].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[1].position, coneProps[2].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[1].position, coneProps[3].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[1].position, coneProps[4].position]}
      color="white"
      lineWidth={1}
      />
    {/* <Line 
      points={[coneProps[2].position, coneProps[3].position]}
      color="white"
      lineWidth={1}
      /> */}
    <Line 
      points={[coneProps[2].position, coneProps[4].position]}
      color="white"
      lineWidth={1}
      />
    <Line 
      points={[coneProps[3].position, coneProps[4].position]}
      color="white"
      lineWidth={1}
      />
    </group>
    </>
  );
}

useGLTF.preload('public/models/terrainWithCones2.glb')



{/* // function CameraRig() { */}
//   useFrame((state, delta) => {
//     easing.damp3(state.camera.position, [state.pointer.x * 0.5, state.pointer.y * 0.5, 5], 0.5, delta)
//     state.camera.lookAt(0, 0, 0)
//   })
// }
// function Scene(){
//   return(
//     <>
//       <OrbitControls />
//       {/* <Environment preset="sunset" /> */}
//       <ambientLight intensity={10} />
//       <Center>
//         <Model scale={0.3}/>
//       </Center>
//       <mesh>
//         <icosahedronGeometry />
//         <MeshTransmissionMaterial
//           backside
//           samples={16}
//           resolution={256}
//           transmission={1}
//           roughness={0.1}
//           clearcoat={1}
//           thickness={0.8}
//           chromaticAberration={0.9}
//           anisotropy={1}
//           color={'#ffffff'}
//           attenuationColor={'#ffffff'}
//           />
//       </mesh>
//       {/* <Stars radius={10} count={300}  fade /> */}
//     </>
//   )
// }

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/models/newSceneExportCompressed.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.BUS.geometry}
//         material={materials['foil_silver.001']}
//         position={[0.48, 0.51, -1.116]}
//         rotation={[0.264, -0.21, 0.041]}
//         scale={0.447}
//       />
//       <group position={[0.898, 0.003, 0.013]} rotation={[-Math.PI / 2, 0, 0.63]} scale={0.002}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube002_Laptop_0.geometry}
//           material={materials.Keys}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube002_Laptop_0_1.geometry}
//           material={materials.Laptop}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Terracotta_Dish_Plant_Pot_var2_0.geometry}
//         material={materials['Plant_Pot_var2.001']}
//         position={[1.537, 0.014, 0.971]}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Backpack.geometry}
//         material={materials.standardSurface2}
//         position={[2.175, 0.308, 0.033]}
//         rotation={[-1.471, -0.181, 2.079]}
//         scale={0.004}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book.geometry}
//         material={materials['Scene_-_Root.001']}
//         position={[0.793, 0.025, 0.74]}
//         rotation={[-Math.PI / 2, 0, 0.09]}
//         scale={0.03}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Compass.geometry}
//         material={materials.DefaultMaterial}
//         position={[1.981, 0, 0.693]}
//         rotation={[-Math.PI / 2, 0, -2.923]}
//         scale={0.054}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cup_1.geometry}
//         material={materials.M_CoffeeCup}
//         position={[0.466, 0.054, 0.472]}
//         rotation={[Math.PI, -0.39, Math.PI]}
//       />
//       <group position={[1.16, -0.002, 0.524]} scale={0.1}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh153.geometry}
//           material={materials.waike}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh153_1.geometry}
//           material={materials.PaletteMaterial002}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh153_2.geometry}
//           material={materials.PaletteMaterial003}
//         />
//       </group>
//       <group position={[0.69, 0.537, -1.035]} rotation={[0.264, -0.21, 0.041]} scale={0.447}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.ICESat2299.geometry}
//           material={materials['black_krinkle.001']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.ICESat2299_1.geometry}
//           material={materials.PaletteMaterial001}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.instruments.geometry}
//         material={materials['ICESat2 Mat.001']}
//         position={[0.031, 0.615, -0.587]}
//         rotation={[0.264, -0.21, 0.041]}
//         scale={0.447}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/models/newSceneExportCompressed.glb')


