import React from "react";
import { useSphere } from "@react-three/cannon";

const Sphere = () => {
  const [ref, api] = useSphere(() => ({ mass: 1 }));

  const bounceBall = () => {
    api.velocity.set(0, 1, 0);
  };

  return (
    <mesh onClick={() => bounceBall()} ref={ref} position={[0, 2, 0]}>
      <sphereBufferGeometry attach={"geometry"} />
      <meshLambertMaterial attach={"material"} color={"hotpink"} />
    </mesh>
  );
};

export default Sphere;
