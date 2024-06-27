import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className="mx-auto py-4 px-8 h-screen "
      onClick={() => navigate("form")}
    >
      <p>position lat{lat}</p>
      <p>position lng{lng}</p>
    </div>
  );
};

export default Map;
