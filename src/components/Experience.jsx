import React from "react";

import { Avatar } from "./Avatar";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      {/* <OrbitControls /> */}
      <Avatar position={[2.3,-1.2,3.3]} scale={1.1} />
      <Environment preset="sunset" />
    </>
  );
}
