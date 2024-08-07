import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";
import { useLocation, useNavigate } from "react-router-dom";
import SpinningBox from "./SpinningBox";
import { useMaps } from "../contexts/MapContext";

const SceneWithSpinningBoxes = () => {
  const navigate = useNavigate();
  const { dispatch } = useMaps();
  const location = useLocation();
  const imageURL = location.state.imageURL;

  function handleGoToHome() {
    dispatch({ type: "hide/camera" });
    navigate("/app");
  }

  return (
    <div className="flex flex-col h-screen relative">
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={(3 * Math.PI) / 4}
            beta={Math.PI / 3}
            radius={5}
          />
          <hemisphericLight
            name="light1"
            intensity={1.2}
            direction={Vector3.Up()}
          />
          <SpinningBox
            name="spinning-box"
            position={new Vector3(0, 0, 0)}
            imageURL={imageURL}
          />
        </Scene>
      </Engine>

      {/* Back to home button */}
      <div className="absolute top-3.5 left-5 flex justify-center items-center">
        <button
          onClick={handleGoToHome}
          className="bg-neutral-300  px-4 py-1.5 rounded-md font text-sm font-semibold"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default SceneWithSpinningBoxes;
