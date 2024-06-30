import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

const AppLayout = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute z-[9999] top-0">
        <Sidebar />
      </div>
      <Map />
      <User />

      {/* <div className="absolute top-32 right-10 z-[1000] ">
        <div
          className={`relative  p-3 flex items-center bg-white rounded-[6px] transition-all duration-500 ease-in-out ${
            isOpen ? "max-w-[240px]" : "max-w-[10px] mr-12"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`relative w-full text-[16px] font-normal text-[#333] px-4 rounded-[6px] outline-none border-none transition-all duration-500 ease-in-out ${
              isOpen ? "pl-[65px]" : ""
            }`}
            onFocus={() => setIsOpen(true)}
          />
          <span
            className={`absolute top-0 left-0 w-[60px] h-full flex justify-center items-center bg-white rounded-[6px] cursor-pointer ${
              isOpen ? "rounded-l-[6px]" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MagnifyingGlass size={20} />
          </span>
          <span className=" cursor-pointer" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default AppLayout;
