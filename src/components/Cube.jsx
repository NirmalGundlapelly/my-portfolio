import React, { useRef } from "react";
import {
  PerspectiveCamera,
  RenderTexture,
  Text,
  Image,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) => (textRef.current.material.Scale = 20)
    // (state) =>
    //   (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Image ref={textRef} url="../../img/photo.jpg" scale={3} />
          {/* <Text ref={textRef} fontSize={2} color="#555">
            Hello
          </Text> */}
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
