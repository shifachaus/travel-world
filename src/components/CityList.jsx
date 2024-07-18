import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map. You can add up to 5 cities." />
    );
  }

  return (
    <ul>
      {cities?.map((city) => {
        console.log(city);
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
};

export default CityList;
