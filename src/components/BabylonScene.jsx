import React, { useEffect, useRef } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3, Texture } from "@babylonjs/core";

const BabylonScene = ({ imageURL, selectedLocation }) => {
  const boxRef = useRef(null);
  const materialRef = useRef(null);

  useEffect(() => {
    if (boxRef.current && selectedLocation) {
      const { lat, lng } = selectedLocation;
      const babylonPosition = new Vector3(lng, 1, -lat); // Adjust as needed for correct positioning
      boxRef.current.position = babylonPosition;
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (materialRef.current && imageURL) {
      const texture = new Texture(imageURL, materialRef.current.getScene());
      materialRef.current.diffuseTexture = texture;
    }
  }, [imageURL]);

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
      <Scene>
        <arcRotateCamera
          name="camera"
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={10}
          target={Vector3.Zero()}
        />
        <hemisphericLight
          name="light"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        {selectedLocation && (
          <box name="box" ref={boxRef} scaling={new Vector3(1, 1, 1)}>
            <standardMaterial
              name="material"
              ref={materialRef}
              diffuseColor={Color3.White()}
            />
          </box>
        )}
      </Scene>
    </Engine>
  );
};

export default BabylonScene;
