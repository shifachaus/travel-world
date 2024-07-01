import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { useState } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import User from "./User";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  console.log(show);

  return (
    <aside
      className={
        show
          ? "bg-[#091B29]  p-4 z-40  h-full font-light transform transition-all delay-75 duration-300 ease-out fixed top-0 left-0 w-full md:w-5/12 lg:w-3/12"
          : " bg-[#091B29] -translate-x-full transform transition-all delay-75 duration-300 ease-out h-full fixed top-0 left-0 "
      }
    >
      <Logo />
      <AppNav />
      <Outlet />

      <div
        onClick={() => setShow(!show)}
        className={`${
          show
            ? "absolute right-4 mt-10"
            : "absolute inset-y-1/2 -right-11 top-1/2 -translate-y-[50%] "
        }  `}
      >
        <p
          className={` ${
            !show &&
            "bg-[#FAFCFF] text-zinc-500 border border-zinc-300 shadow-md "
          } 
          text-3xl rounded-md  px-3 py-3 cursor-pointer`}
        >
          {!show ? (
            <CaretRight size={22} color={"#313131"} />
          ) : (
            <CaretLeft size={22} color={"#FAFCFF"} />
          )}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
