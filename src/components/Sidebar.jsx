import { Outlet } from "react-router-dom";
import CopyrightFooter from "./CopyrightFooter";
import Logo from "./Logo";
import AppNav from "./AppNav";

const Sidebar = () => {
  return (
    <aside className="relative h-screen  py-4 px-8 bg-[#091B29] w-screen sm:w-[400px]">
      <Logo />
      <AppNav />
      <Outlet />
      <CopyrightFooter />
    </aside>
  );
};

export default Sidebar;
