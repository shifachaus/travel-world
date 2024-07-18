import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { v4 as uuidv4 } from "uuid";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const data = JSON.parse(localStorage.getItem("cities")) || [];
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }

    fetchCities();
  }, []);

  const getCity = useCallback(
    function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });

      try {
        const data = JSON.parse(localStorage.getItem("cities")) || [];
        const city = data.find((city) => city.id === id);

        dispatch({ type: "city/loaded", payload: city });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city...",
        });
      }
    },
    [currentCity.id]
  );

  function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const data = JSON.parse(localStorage.getItem("cities")) || [];

      if (data.length >= 5) {
        throw new Error("You can only add up to 5 cities.");
      }

      const cityWithId = { ...newCity, id: uuidv4() };
      const updatedData = [...data, cityWithId];
      localStorage.setItem("cities", JSON.stringify(updatedData));
      dispatch({ type: "city/created", payload: cityWithId });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: err.message || "There was an error creating the city...",
      });
    }
  }
  function deleteCity(id) {
    dispatch({ type: "loading" });

    try {
      const data = JSON.parse(localStorage.getItem("cities")) || [];
      const updatedData = data.filter((city) => city.id !== id);
      localStorage.setItem("cities", JSON.stringify(updatedData));

      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
