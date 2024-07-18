import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <div className="relative">
      <div className="absolute z-[9999] top-0">
        <Sidebar />
      </div>
      <Map />
    </div>
  );
};

export default AppLayout;
