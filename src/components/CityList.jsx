import CityItem from "./CityItem";
import Spinner from "./Spinner";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul>
      {cities?.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
};

export default CityList;
