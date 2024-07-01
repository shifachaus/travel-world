import { useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { MagnifyingGlass, X } from "phosphor-react";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute z-[9999] top-0">
        <Sidebar />
      </div>
      <Map />

      {/* <User />
      <div className="absolute w-full sm:max-w-md  top-3.5 left-1/2 -translate-x-[50%] z-[1000] ">
        <div
          className={` mx-4 p-2 flex items-center border border-zinc-300 shadow-md  bg-white rounded-[6px]`}
        >
          <input
            type="text"
            placeholder="Search location"
            className={` w-full text-[16px] font-normal text-[#333] px-4 rounded-[6px] outline-none border-none transition-all duration-500 ease-in-out `}
          />
          <span className="cursor-pointer">
            <MagnifyingGlass size={20} color="#5a5959" />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default AppLayout;
