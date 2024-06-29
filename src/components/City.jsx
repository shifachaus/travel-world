import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();
  const { currentCity, getCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className="text-zinc-300 font cursor-pointer  p-6 rounded-md  mb-2 bg-[#2C3747]">
      <div className="flex flex-col mb-3 ">
        <h6 className="text-[.9rem]  font font-semibold text-[#CBDAF3] ">
          City name
        </h6>
        <h3 className="text-2xl font-crimsontext">
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="flex flex-col mb-3">
        <h6 className="text-[.9rem]  font font-semibold text-[#CBDAF3] ">
          You went to {cityName} on
        </h6>
        <p className="text-md">{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="flex flex-col mb-3 ">
          <h6 className="text-[.9rem] font font-semibold text-[#CBDAF3] ">
            Your notes
          </h6>
          <p className="text-md">{notes}</p>
        </div>
      )}

      <div className="flex flex-col mb-6 ">
        <h6 className="text-[.9rem] font font-semibold text-[#CBDAF3] ">
          Learn more
        </h6>
        <a
          className="underline text-[#FFCF4A]"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default City;
