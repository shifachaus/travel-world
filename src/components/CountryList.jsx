import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  console.log(cities);

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-4">
      {countries?.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
};

export default CountryList;
