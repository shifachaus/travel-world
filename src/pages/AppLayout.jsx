import { useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <p
        onClick={() => setShow(!show)}
        className={`absolute z-[10] text-3xl ${
          show ? "text-zinc-100" : "text-black"
        } top-2 left-3 cursor-pointer`}
      >
        {">"}
      </p>
      {show && <Sidebar />}
      <Map />
    </div>
  );
};

export default AppLayout;
