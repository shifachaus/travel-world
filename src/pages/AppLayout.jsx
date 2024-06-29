import { useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

const AppLayout = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="relative">
      <div className="absolute z-[9999] top-0">
        <>
          <p
            onClick={() => setShow(!show)}
            className={`absolute z-[10]  text-3xl ${
              show ? "text-zinc-100" : "text-black"
            } top-20 left-3 cursor-pointer`}
          >
            {">"}
          </p>
          {show && <Sidebar />}
        </>
      </div>
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
