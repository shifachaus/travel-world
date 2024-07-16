import { createContext, useContext, useReducer } from "react";

const MapContext = createContext();

const initialState = {
  selectedLocation: null,
  isCameraEnabled: false,
  showSceneButton: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "select/location":
      return {
        ...state,
        selectedLocation: action.payload,
        isCameraEnabled: true,
      };

    case "show/scene":
      return {
        ...state,
        showSceneButton: true,
      };

    default:
      return state;
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let name = "shifa";

  return (
    <MapContext.Provider value={{ state, dispatch, name }}>
      {children}
    </MapContext.Provider>
  );
}

function useMaps() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}

export { MapProvider, useMaps };
