import CopyrightFooter from "./CopyrightFooter";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="relative h-screen  py-4 px-8 bg-[#091B29] max-w-sm  ">
      <Logo />

      <p>List of cities</p>

      <CopyrightFooter />
    </aside>
  );
};

export default Sidebar;
