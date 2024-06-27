import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity } = useCities();

  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={` ${
          id === currentCity.id
            ? "border border-l-4 border-l-primary border-primary"
            : "border border-l-4 border-l-primary border-t-[#2C3747] border-b-[#2C3747] border-r-[#2C3747] "
        } text-zinc-300 font cursor-pointer py-4 px-3 rounded-md flex justify-between gap-4 mb-2 hover:bg-[#2C3747]`}
      >
        <div className="flex gap-4 items-center">
          <span className="text-md">{emoji}</span>
          <h3 className="font__CrimsonText text-lg">{cityName}</h3>
        </div>
        <div className="flex gap-4 items-center">
          <time className="font__CrimsonText text-sm">
            ({formatDate(date)})
          </time>
          <button className="cursor-pointer">&times;</button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
