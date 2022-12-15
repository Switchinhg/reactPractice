import React, { useRef } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import {  PresentationControls } from '@react-three/drei'


/* MODELO DEL MUNDO */
function Scene() {
   // This reference gives us direct access to the THREE.Mesh object
  const boxRef = useRef();

    useFrame((state, delta) => (boxRef.current.rotation.y -= 0.002))
    useFrame((state, delta) => (boxRef.current.position.y = -1.2))

    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    return (
      <mesh ref={boxRef}>
      <Suspense fallback={null} >
        <primitive object={gltf.scene} />
      </Suspense>
      </mesh>
    )
  }


/* Hook original */
export default function Three() {
  return (

    
    <div style={{height:'100vh',width:'50vw',marginLeft:'50%'}}>
      {/* Canvas y Camara */}
        <Canvas camera={{fov:35,zoom:1.2,near:1,far:1000}} 
        >
          {/* Luces */}
        <ambientLight intensity={1.0} />
        <directionalLight color='#F1EDDA' position={[10, 10, 50]} />


        {/* modificaciones a la escena(tambien para mover con  el click) */}
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={true} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1.5} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0.1]} // Default rotation
          polar={[Math.PI * 2, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 50, friction: 10 }} // Spring config
          >
            <Scene />
        </PresentationControls>
        </Canvas>
    </div>
  )
}
