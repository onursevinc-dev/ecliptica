"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function AboutModel(props) {
    
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/sphere-bot.glb");
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
  
    // İlk animasyonu başlat
    const animationIndex = names[2]
    if (actions[animationIndex]) {
      const firstAction = actions[animationIndex];
      firstAction.reset().fadeIn(0.5).play().clampWhenFinished = true;
  
    }
  
    return () => {
      names.forEach((name) => {
        if (actions[name]) actions[name].stop();
      });
    };
  }, [actions, names]);
  
  
  return (
    <group ref={group} {...props} dispose={null} rotation={[0.3,-0.8,0]} scale={0.8}>
      <group name="Sketchfab_Scene">
        <group name="Object_4" scale={0.667}>
          <group
            name="Hemi"
            position={[3.195, 7.238, 1.018]}
            rotation={[0.413, -0.073, -0.79]}
          />
        </group>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Sphere_Bot__Leg_Ao}
          skeleton={nodes.Object_7.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_9.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_11.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_13.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_15.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_17.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_19.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_21.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_23.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_25.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_27"
          geometry={nodes.Object_27.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_27.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_29"
          geometry={nodes.Object_29.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_29.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_31"
          geometry={nodes.Object_31.geometry}
          material={materials.Sphere_Bot__Leg_Nor}
          skeleton={nodes.Object_31.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_33"
          geometry={nodes.Object_33.geometry}
          material={materials.Material}
          skeleton={nodes.Object_33.skeleton}
          scale={0.667}
        />
        <skinnedMesh
          name="Object_34"
          geometry={nodes.Object_34.geometry}
          material={materials.Material_002}
          skeleton={nodes.Object_34.skeleton}
          scale={0.667}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/sphere-bot.glb");
