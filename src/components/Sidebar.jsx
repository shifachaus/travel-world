import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { useState } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import Footer from "./Footer";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <aside
      className={
        show
          ? "bg-[#111]  p-4 z-40  h-full font-light transform transition-all delay-75 duration-300 ease-out fixed top-0 left-0 w-[95%] md:w-5/12 lg:w-3/12"
          : " bg-[#111] -translate-x-full transform transition-all delay-75 duration-300 ease-out h-full fixed top-0 left-0 "
      }
    >
      <Logo />
      <AppNav />
      <Outlet />

      <div
        onClick={() => setShow(!show)}
        className={`${
          show
            ? "absolute -right-3 top-1/2 -translate-y-[50%] inset-y-1/2"
            : "absolute inset-y-1/2 -right-10 top-1/2 -translate-y-[50%] "
        }  `}
      >
        <p
          className={` ${
            !show
              ? "bg-[#FAFCFF] text-zinc-500 border border-zinc-300 shadow-md p-2 rounded-md "
              : "bg-gray-800 text-zinc-500 rounded-full shadow-lg p-[.28rem]"
          } 
         cursor-pointer`}
        >
          {!show ? (
            <CaretRight size={22} color={"#313131"} />
          ) : (
            <CaretLeft size={18} color={"#FAFCFF"} />
          )}
        </p>
      </div>

      <Footer />
    </aside>
  );
};

export default Sidebar;
