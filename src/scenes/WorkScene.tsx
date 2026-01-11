import { OrbitControls, Environment, useGLTF, Center, Lightformer, MeshTransmissionMaterial, Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState, useRef } from "react"
import { Vector3 } from "three"
import { easing } from "maath"

// function CameraRig() {
//   useFrame((state, delta) => {
//     easing.damp3(state.camera.position, [state.pointer.x * 0.5, state.pointer.y * 0.5, 5], 0.5, delta)
//     state.camera.lookAt(0, 0, 0)
//   })
// }

export function Model(props) {
  const { nodes, materials } = useGLTF('/newSceneExportCompressed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BUS.geometry}
        material={materials['foil_silver.001']}
        position={[0.48, 0.51, -1.116]}
        rotation={[0.264, -0.21, 0.041]}
        scale={0.447}
      />
      <group position={[0.898, 0.003, 0.013]} rotation={[-Math.PI / 2, 0, 0.63]} scale={0.002}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Laptop_0.geometry}
          material={materials.Keys}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Laptop_0_1.geometry}
          material={materials.Laptop}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Terracotta_Dish_Plant_Pot_var2_0.geometry}
        material={materials['Plant_Pot_var2.001']}
        position={[1.537, 0.014, 0.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Backpack.geometry}
        material={materials.standardSurface2}
        position={[2.175, 0.308, 0.033]}
        rotation={[-1.471, -0.181, 2.079]}
        scale={0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book.geometry}
        material={materials['Scene_-_Root.001']}
        position={[0.793, 0.025, 0.74]}
        rotation={[-Math.PI / 2, 0, 0.09]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Compass.geometry}
        material={materials.DefaultMaterial}
        position={[1.981, 0, 0.693]}
        rotation={[-Math.PI / 2, 0, -2.923]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_1.geometry}
        material={materials.M_CoffeeCup}
        position={[0.466, 0.054, 0.472]}
        rotation={[Math.PI, -0.39, Math.PI]}
      />
      <group position={[1.16, -0.002, 0.524]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh153.geometry}
          material={materials.waike}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh153_1.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh153_2.geometry}
          material={materials.PaletteMaterial003}
        />
      </group>
      <group position={[0.69, 0.537, -1.035]} rotation={[0.264, -0.21, 0.041]} scale={0.447}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ICESat2299.geometry}
          material={materials['black_krinkle.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ICESat2299_1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.instruments.geometry}
        material={materials['ICESat2 Mat.001']}
        position={[0.031, 0.615, -0.587]}
        rotation={[0.264, -0.21, 0.041]}
        scale={0.447}
      />
    </group>
  )
}

useGLTF.preload('/newSceneExportCompressed.glb')



export default function PersonalScene() {
  return (
    <>
      <OrbitControls />
      {/* <Environment preset="sunset" /> */}
      <ambientLight intensity={10} />
      <Center>
        <Model scale={0.3}/>
      </Center>
      <mesh>
        <icosahedronGeometry />
        <MeshTransmissionMaterial
            samples={8}
            transmission={1}
            roughness={0.1}
            thickness={0.2}
            chromaticAberration={0.2}
            color={'#ffffff'}
            attenuationColor={'#ffffff'}
          />
      </mesh>
      {/* <Stars radius={10} count={300}  fade /> */}
    </>
  )
}
