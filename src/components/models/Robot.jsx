"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RobotModel(props) {
  const { nodes, materials } = useGLTF("/models/flying_robot.glb");

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y =
      -0.5 + Math.sin(state.clock.elapsedTime) * 0.5;
    modelRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5;
  });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      scale={[0.004, 0.004, 0.004]}
      rotation={[0.2, 0.5, 0]}
    >
      <mesh
        name="polySurface206_M_Board_blinn_0"
        castShadow
        receiveShadow
        geometry={nodes.polySurface206_M_Board_blinn_0.geometry}
        material={materials.M_Board_blinn}
      />
      <mesh
        name="polySurface206_M_Board_Blinn_Second_0"
        castShadow
        receiveShadow
        geometry={nodes.polySurface206_M_Board_Blinn_Second_0.geometry}
        material={materials.M_Board_Blinn_Second}
      />
      {/* <mesh name="polySurface206_pasted__M_Title_Ceiling_0" castShadow receiveShadow geometry={nodes.polySurface206_pasted__M_Title_Ceiling_0.geometry} material={materials.pasted__M_Title_Ceiling} /> */}
      <mesh
        name="polySurface206_pasted__M_Boss_Blinn_Second1_0"
        castShadow
        receiveShadow
        geometry={nodes.polySurface206_pasted__M_Boss_Blinn_Second1_0.geometry}
        material={materials.pasted__M_Boss_Blinn_Second1}
      />
      <mesh
        name="polySurface206_pasted__M_Boss_Blinn1_0"
        castShadow
        receiveShadow
        geometry={nodes.polySurface206_pasted__M_Boss_Blinn1_0.geometry}
        material={materials.pasted__M_Boss_Blinn1}
      />
    </group>
  );
}

useGLTF.preload("/models/flying_robot.glb");
