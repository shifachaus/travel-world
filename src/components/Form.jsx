import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="cityName"
          className="block mb-2 text-md font-medium text-white"
        >
          City name
        </label>
        <input
          className="block w-full p-2.5 rounded-lg bg-[#2C3747] border-gray-600 placeholder-gray-400 text-white "
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div>
        <label
          htmlFor="date"
          className="block mb-2 text-md font-medium text-white"
        >
          When did you go to {cityName}?
        </label>
        <input
          className="block w-full p-2.5 rounded-lg bg-[#2C3747] border-gray-600 placeholder-gray-400 text-white "
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block mb-2 text-md font-medium text-white"
        >
          Notes about your trip to {cityName}
        </label>
        <textarea
          className="block w-full p-4 rounded-lg resize-none bg-[#2C3747] border-gray-600 placeholder-gray-400 text-white "
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div>
        <Button type="back-btn" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
        <Button type="primary-green">Add</Button>
      </div>
    </form>
  );
};

export default Form;
