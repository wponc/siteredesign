import { OrbitControls, Environment, Center, useGLTF, MeshTransmissionMaterial, Lightformer, useCursor, Preload, Line } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber"
import React, { useState, useRef } from "react"
import { Vector3 } from "three"
import { easing } from "maath"
import { useControls } from 'leva'



export default function WorkScene() {
  return (
  <Canvas
    style={{ width: "100vw", height: "100vh", position: "relative" }}
    camera={{ position: [0, 2, 1], fov: 50 }}
    gl={{ antialias: true, alpha: true }}
  >
    <Scene />
    <Preload all />
  </Canvas>
  )
}

function Scene(){

  // const meshRef = useRef(null)

  // const randomRotation = useRef([
  //   Math.random() * Math.PI * 2, // Random X-axis rotation
  //   Math.random() * Math.PI * 2, // Random Y-axis rotation
  //   Math.random() * Math.PI * 2, // Random Z-axis rotation
  // ]);
  
  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.x += delta * 0.2
  //     meshRef.current.rotation.y += delta * 0.2
  //   }
  // })

  return(
    <>
      <Environment preset="sunset"/>
    <Model/>
    <OrbitControls />
    </>
  )
}

function Model(props) {
  const { nodes, materials } = useGLTF('models/terrainCompressed.glb')
  return (
    <group {...props} dispose={null}>
      {/* landscape */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        />
        {/* cones */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond1.geometry}
        position={[0.191, 0.611, -0.156]}
        scale={[0.046, 0.075, 0.046]}
      >
       <MeshTransmissionMaterial
          samples={1}
          resolution={4}
          transmission={1}
          roughness={0.5}
          thickness={.4}
          chromaticAberration={0.4}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond2.geometry}
        position={[-0.002, 0.522, -0.491]}
        scale={[0.046, 0.075, 0.046]}
           >
       <MeshTransmissionMaterial
          samples={1}
          resolution={4}
          transmission={1}
          roughness={0.5}
          thickness={.4}
          chromaticAberration={0.4}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond3.geometry}
        position={[-0.023, 0.616, 0.273]}
        scale={[0.046, 0.075, 0.046]}
           >
       <MeshTransmissionMaterial
          samples={1}
          resolution={4}
          transmission={1}
          roughness={0.5}
          thickness={.4}
          chromaticAberration={0.4}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond4.geometry}
        position={[-0.491, 0.339, 0.273]}
        scale={[0.046, 0.075, 0.046]}
      >
       <MeshTransmissionMaterial
          samples={1}
          resolution={4}
          transmission={1}
          roughness={0.5}
          thickness={.4}
          chromaticAberration={0.4}
          color={'#ffffff'}
          attenuationColor={'#ffffff'}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/terrainCompressed.glb')

function Cone({ geometry, material, name, ...props }) {


  // const [hovered, setHovered] = useState(false);
  // const coneRef = useRef();
  const basePosition = useRef(props.position); // store original position once

 
  // useFrame((state, delta) => {
  //   easing.damp3(
  //     coneRef.current.scale,
  //     hovered ? [0.09, 0.09, 0.09] : [0.069, 0.069, 0.069],
  //     0.1,
  //     delta
  //   );
  //   easing.damp3(
  //     coneRef.current.position,
  //     hovered
  //       ? [basePosition.current[0], basePosition.current[1] + 0.075, basePosition.current[2]]
  //       : basePosition.current,
  //     0.3,
  //     delta
  //   );
  // });

  return (
    <mesh
      // ref={coneRef}
      castShadow
      receiveShadow
      geometry={geometry}
      // onPointerOver={() => {
      //   setHovered(true)
      //   console.log("Hover over ")
      //   console.log(`Cone position: ${coneRef.current.position}`)
      // }}
      // onPointerOut={() => setHovered(false)}
      // onClick={() => {
      //   // setActive(true)
      //   console.log(`cone ${name} clicked`)
      // }}
      {...props}
    />
  );
}


// function Model(props) {
//   const { nodes, materials } = useGLTF('models/terrainCompressed.glb')

//     const { cone1Position } = useControls({'cone1Position': { value: [-0.493, -0.202, 0.761], step: 0.05 }})
//     const { cone2Position } = useControls({'cone2Position': { value: [0.19, 0.086, 0.333], step: 0.05 }})
//     const { cone3Position } = useControls({'cone3Position': { value: [-0.022, 0.081, 0.766], step: 0.05 }})
//     const { cone4Position } = useControls({'cone4Position': { value: [0, -.02, 0.0], step: 0.05 }})

//     const coneProps = [
//       { name: 'Cone1', position: cone1Position, job: 'esri'},
//       { name: 'Cone2', position: cone2Position, job: 'cnre'},
//       { name: 'Cone3', position: cone3Position, job: 'skt'},
//       { name: 'Cone4', position: cone4Position, job: 'vsfs'},
//     ];
//   return (
//     <group {...props} dispose={null}>
//       {coneProps.map(({ name, position }) => (
//         <Cone
//             key={name}
//             name={name}
//             geometry={nodes[name].geometry}
//             material={nodes[name].material}
//             position={position}
//           />
//         ))}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane.geometry}
//         material={nodes.Plane.material}
//       ></mesh>
//     </group>
//   )
// }

// useGLTF.preload('models/terrainCompressed.glb')

// function Model(props) {
//   const { nodes, materials } = useGLTF('models/terrainWConesCompressed.glb')
//   console.log('nodes',nodes)

//     const { cone1Position } = useControls({'cone1Position': { value:[0.047, 0.765, 0.195], step: 0.05 }})
//     const { cone2Position } = useControls({'cone2Position': { value: [-0.452, 0.668, 0.632], step: 0.05 }})
//     const { cone3Position } = useControls({'cone3Position': { value: [0.747, 0.712, -0.491], step: 0.05 }})
//     const { cone4Position } = useControls({'cone4Position': { value: [-0.528, 0.765, -0.247], step: 0.05 }})
//     const { cone5Position } = useControls({'cone5Position': { value: [0.05, 0.626, -0.497], step: 0.05 }})

//     const coneProps = [
//       { name: 'Cone1', position: cone1Position, job: 'esri'},
//       { name: 'Cone2', position: cone2Position, job: 'cnre'},
//       { name: 'Cone3', position: cone3Position, job: 'skt'},
//       { name: 'Cone4', position: cone4Position, job: 'vsfs'},
//       { name: 'Cone5', position: cone5Position, job: 'spes'},
//     ];
//   return (
//     <group {...props} dispose={null}>
//       {/* the landscape mesh */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.landscape.geometry}
//         material={nodes.landscape.material}
//       />
//         {coneProps.map(({ name, position }) => (
//           <Cone
//               key={name}
//               name={name}
//               geometry={nodes[name].geometry}
//               material={nodes[name].material}
//               position={position}
//             />
//         ))}
//     </group>
//   )
// }

// useGLTF.preload('models/terrainWConesCompressed.glb')

const jobs = {
  // esri
  "esri": {
      "desc": "’m currently a GIS Engineer for Living Atlas of the World, making maps for public policy. I built web app to automate thumbnail for our American Community Survey content. My amazing colleague had, and I built the machinery to combine them. I used ArcGIS Pro's Map Series to create map layouts of 2030 Projected Population Change for for all 435 Congressional Districts of the US (show them). Prior to this role, I did two interships with Esri.",
      "img": "public/images/scraps/2.jpg" 
    },
  // cnre
  "cnre": {
    "desc": "My master's focused use LiDAR data from the ICESat-2 satellite to detect canopy height growth in the Loblolly Pine region of the southeastern US. This was my most involved project, blending academic pursuit, research design, and teaching assistant responsibilities in an exciting challenge",
    "img": "public/images/scraps/2.jpg" 
  },
  // skt
  "skt": {
    "desc": "Since 2021, I've also had the chance to assist in the fieldwork operations at an amazing family-owned land conservation firm. For the role I’ve been able to travel extensively throughout the state of Virginia, conducting site visits to assess land protection practices in the establishment of conservation easements. Much of this experience has involved capture of aerial imagery with UAVs, collection of detailed photopoint information in ArcGIS Field Maps, and contribution to baseline documentation reports. Most rewarding has been the interactions with landowners themselves, who often take large pride in the natural beauty of their property. Take a look at some of the stewardship services our firm offers at sktworks.com",
    "img": "public/images/scraps/2.jpg"   },
  // vsfs
  "vsfs": {
    "desc": "",
    "img": "public/images/scraps/2.jpg"   },
  // spes
  "spes": {
    "desc": "During undergraduate, I worked as a research assistant in the Virginia Tech Turfgrass Pathology Lab, exploring novel applications of technology to traditional turf management methodologies. Primarily, I worked on a project for automated disease detection on golf course fairways. This project was an expansion of the lab's prior research, assessing the accuracy of drone imagery analysis in identifying spring dead spot in small regions. From there, Independence Golf Club was very generous to volunteer their Championship 18 course as a test site for applying these methods across an entire course. For this project I assisted with the drone flights, generated orthomosaics in Pix4D, and conducted geospatial analysis in ArcGIS Pro. Overall this project was such a privilege to work on, combining in situ data collection and in-lab data analysis. I participated in research on nematode sampling, surface uniformity testing, and other efforts to improve the user experience on golf courses and athletic facilities. I also completed a project investigating the viability of Blue Grama as a low-maintenance choice for lawns in the transition zone. Drones, golf courses, and sunshine, what more could I have asked for? A research poster for some of this work is available",
    "img": "public/images/scraps/2.jpg" 
  },
}