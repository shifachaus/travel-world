import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className="relative">
      <div className="absolute z-[9999] top-0">
        <Sidebar />
      </div>
      <User />
      <Map />
    </div>
  );
};

export default AppLayout;
