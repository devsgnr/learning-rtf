import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Sphere from "../components/sphere";
import Plane from "../components/plane";

interface FirstSceneProps {
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const FirstScene: React.FC<FirstSceneProps> = ({
  scrollRef,
}: FirstSceneProps) => {
  const CanvasStyle: React.CSSProperties = {
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
  };

  return (
    <Canvas style={CanvasStyle} camera={{ fov: 40, position: [10, 15, 10] }}>
      <color attach={"background"} args={["black"]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 20, 10]} angle={0.5} />
      <Physics>
        {Array(10)
          .fill("")
          .map((_, index: number) => (
            <Sphere
              key={index}
              position={[
                Math.random() * index * 1.6,
                index * 0.5 + 1,
                Math.random() * index * 1.5,
              ]}
            />
          ))}
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default FirstScene;
