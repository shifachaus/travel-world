import { useParams } from "react-router-dom";

const City = () => {
  const { id } = useParams();

  return <h2 className="text-zinc-300 font text-lg">City {id}</h2>;
};

export default City;
