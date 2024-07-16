import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import Message from "./Message";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const [lat, lng] = useUrlPosition();
  const { isLoading, createCity } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");

        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className="max-w-sm mx-auto  " onSubmit={handleSubmit}>
      <div className="mb-5 ">
        <label
          htmlFor="cityName"
          className="block mb-2 text-md font-medium text-white"
        >
          City name
        </label>
        <div className="flex items-center  p-2.5 rounded-lg bg-[#2C3747] border-gray-600 ">
          <input
            className=" px-1 placeholder-gray-400 text-white w-full  bg-[#2C3747] outline-none"
            id="cityName"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
          />
          <span className=" text-zinc-300 font-semibold text-sm">{emoji}</span>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="date"
          className="block mb-2 text-md font-medium text-white"
        >
          When did you go to {cityName}?
        </label>

        <div className="flex items-center  p-2.5 rounded-lg bg-[#2C3747] border-gray-600 ">
          <DatePicker
            id="date"
            className=" px-1 placeholder-gray-400 text-white bg-[#2C3747] outline-0"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="notes"
          className="block mb-2 text-md font-medium text-white"
        >
          Notes about your trip to {cityName}
        </label>
        <textarea
          className="block w-full p-4 outline-0 rounded-lg resize-none bg-[#2C3747] border-gray-600 placeholder-gray-400 text-white "
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between">
        <BackButton />
        <Button type="bg-primary rounded-lg px-5 py-2.5">Add</Button>
      </div>
    </form>
  );
};

export default Form;
