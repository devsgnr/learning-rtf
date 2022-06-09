import React from "react";
import { Triplet, useSphere } from "@react-three/cannon";

interface SphereProps {
  position: Triplet;
}

const Sphere: React.FC<SphereProps> = ({
  position = [0, 1, 0],
}: SphereProps) => {
  const [ref, api] = useSphere(() => ({ mass: 0, position: position }));

  const bounceBall = () => {
    api.velocity.set(0, 10, 0);
  };

  return (
    <mesh onClick={() => bounceBall()} ref={ref} position={[0, 1, 0]}>
      <sphereBufferGeometry attach={"geometry"} />
      <meshLambertMaterial attach={"material"} color={"hotpink"} />
    </mesh>
  );
};

export default Sphere;
