import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Sphere from "./components/sphere";
import Plane from "./components/plane";

const App = () => {
  const CanvasStyle: React.CSSProperties = { height: "100vh" };

  return (
    <Canvas style={CanvasStyle} camera={{ fov: 75, position: [10, 20, 10] }}>
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 30, 10]} angle={0.5} />
      <OrbitControls />
      <Physics>
        <Sphere />
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default App;
