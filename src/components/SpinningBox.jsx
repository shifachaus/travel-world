import React, { useRef, useState, useEffect } from "react";
import { useClick, useBeforeRender } from "react-babylonjs";
import { Vector3, Texture } from "@babylonjs/core";

const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const SpinningBox = ({ name, position, imageURL }) => {
  const boxRef = useRef(null);
  const materialRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  useClick(() => setClicked((clicked) => !clicked), boxRef);

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  useEffect(() => {
    if (materialRef.current && imageURL) {
      const texture = new Texture(imageURL, materialRef.current.getScene());
      materialRef.current.diffuseTexture = texture;
    }
  }, [imageURL]);

  return (
    <box
      name={name}
      ref={boxRef}
      size={2}
      position={position}
      scaling={clicked ? BiggerScale : DefaultScale}
      width={0.8}
      wrap
    >
      <standardMaterial ref={materialRef} />
    </box>
  );
};

export default SpinningBox;
