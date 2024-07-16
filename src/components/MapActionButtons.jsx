import { useMaps } from "../contexts/MapContext";
import Button from "./Button";
import { Camera, Cube } from "phosphor-react";

const MapActionButtons = ({ takeScreenshot, navigateToScene }) => {
  const { state } = useMaps();

  return (
    <div className="z-[1000] absolute top-[31rem] right-3 flex gap-3 ">
      {state.isCameraEnabled && (
        <Button
          onClick={takeScreenshot}
          type={
            "bg-[#FAFCFF] p-2.5 rounded-md font text-zinc-500 border border-zinc-300 shadow-md"
          }
        >
          <Camera size={22} color={"#313131"} />
        </Button>
      )}

      {state.showSceneButton && (
        <Button
          onClick={navigateToScene}
          type={
            "bg-[#FAFCFF] p-2.5 rounded-md font text-zinc-500 border border-zinc-300 shadow-md"
          }
        >
          <Cube size={22} color={"#313131"} />
        </Button>
      )}
    </div>
  );
};

export default MapActionButtons;
