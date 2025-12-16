import { OrbitControls, Environment, MeshTransmissionMaterial, Text, Text3D, Center } from "@react-three/drei"
import PersonalScene from "../scenes/PersonalScene"
import { useState, useEffect, useRef } from "react"

export default function HomeScene() {
  const fontPath = './Roboto_Regular.json'
  return(
    <>
    {/* <ambientLight intensity={Math.PI} /> */}
    <OrbitControls enableZoom={false}/>
    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" background />
    <Center>
      <Text3D font={fontPath}>
        <MeshTransmissionMaterial 
        clearcoat={1}
        samples={3}
        thickness={3}
        chromaticAberration={0.8}
        anisotropy={0.7}
        attenuationColor={'#3C775A'}
        />
        w.l
      </Text3D>
    </Center>
    </>
  )
  
}