import { useRef, forwardRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"
import { easing } from "maath"
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'


const PEN_TIP_LOCAL = new THREE.Vector3(0, -0.1, 0)

const Pen = forwardRef<THREE.Object3D>((_, ref) => {
  const { scene } = useGLTF("/penCompressed.glb")

  return (
    <group ref={ref}>
      {scene.children.map((child, i) => {
        if (!(child instanceof THREE.Mesh)) return null

        return (
          <mesh
            key={i}
            geometry={child.geometry}
            position={child.position.toArray()}
            rotation={child.rotation.toArray()}
            scale={child.scale.toArray()}
            castShadow
            receiveShadow
          >
            <MeshTransmissionMaterial
              backside
              samples={8}
              resolution={32}
              transmission={1}
              roughness={0.4}
              thickness={0.9}
              chromaticAberration={0.9}
              color={'#ffffff'}
              attenuationColor={'#ffffff'}
            />
          </mesh>
        )
      })}
    </group>
  )
})

useGLTF.preload('/penCompressed.glb')
function DrawLine({ getPoint }: { getPoint: () => THREE.Vector3 | null }) {
  const lineRef = useRef<THREE.Line>(null!)
  const points = useRef<{ point: THREE.Vector3; time: number }[]>([])
  const colors = useRef<THREE.Vector4[]>([])

  const vertexShader = `
    attribute vec4 color;
    varying vec4 vColor;
    void main() {
      vColor = color;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    varying vec4 vColor;
    void main() {
      gl_FragColor = vColor;
    }
  `

  useFrame((state) => {
    const p = getPoint()
    if (!p || !lineRef.current) return

    const last = points.current.at(-1)

    // Distance threshold prevents oversampling
    if (!last || last.point.distanceToSquared(p) > 0.0005) {
      const currentTime = state.clock.elapsedTime
      points.current.push({ point: p.clone(), time: currentTime })
      colors.current.push(new THREE.Vector4(1, 1, 1, 1)) // start white with full alpha

      // Remove old points (older than 3 seconds)
      const lifetime = 3
      const filtered = points.current.filter(item => currentTime - item.time < lifetime)
      points.current.length = 0
      points.current.push(...filtered)

      // Update colors based on age
      colors.current.length = 0
      for (const item of points.current) {
        const age = currentTime - item.time
        const alpha = Math.max(0, 1 - age / lifetime)
        colors.current.push(new THREE.Vector4(1, 1, 1, alpha))
      }

      const oldGeom = lineRef.current.geometry
      oldGeom.dispose()

      const newGeom = new THREE.BufferGeometry().setFromPoints(points.current.map(p => p.point))
      newGeom.setAttribute('color', new THREE.Float32BufferAttribute(colors.current.flatMap(c => [c.x, c.y, c.z, c.w]), 4))
      lineRef.current.geometry = newGeom
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </line>
  )
}



export default function PenDrawingScene() {
  const penRef = useRef<THREE.Object3D>(null!)

  const getPenTipWorld = () => {
    if (!penRef.current) return null
    return PEN_TIP_LOCAL.clone().applyMatrix4(penRef.current.matrixWorld)
  }

  useFrame((state, delta) => {
    if (!penRef.current) return

    // Position follows mouse on XZ plane
    easing.damp3(
      penRef.current.position,
      [
        state.pointer.x * 1.2,
        0,
        -state.pointer.y * 1.2
      ],
      0.3,
      delta
    )

    // Slight wrist rotation
    penRef.current.rotation.x = THREE.MathUtils.lerp(
      penRef.current.rotation.x,
      state.pointer.y * 0.4,
      0.1
    )
    penRef.current.rotation.z = THREE.MathUtils.lerp(
      penRef.current.rotation.z,
      state.pointer.x * 0.4,
      0.1
    )

    penRef.current.updateMatrixWorld()
  })

  return (
    <>
      <Pen ref={penRef} />
      <DrawLine getPoint={getPenTipWorld} />
      <Environment files="colorful_studio.exr" />
    </>
  )
}
