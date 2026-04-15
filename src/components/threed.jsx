import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { AmbientLight } from 'three'




const Cube = ({position, size, color })=>{
  const ref = useRef();
  useFrame((state,delta)=>{
    ref.current.rotation.x += delta ;
    ref.current.rotation.y += delta ;
    ref.current.position.z += delta;
    console.log(delta);
 
  })

  return(
     <mesh position={position} ref={ref}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>

  )
}

const Sphere = ({position, size, color })=>{

  const ref = useRef();
  useFrame((state,delta)=>{
    ref.current.rotation.x += delta * 0.2 ;
  })
  return(
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}

const Torus = ({position, size, color })=>{
  const ref = useRef();
  useFrame((state,delta)=>{
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    
  })
  return(
    <mesh position={position} ref={ref}> 
      <torusGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}
const threed = ()=> {
 
  return (
  
  <Canvas>
    <directionalLight position={[0,0,1]} intensity={0.5}/>
    <ambientLight intensity={0.5}/>
    {/* <Cube position={[0,0,0]} size={[1,1,1]} color={"red"} /> */}
    <Sphere position={[0,0,0]} size={[3,30,30]} color={"blue"} />
      </Canvas>
  )
}

export default threed;