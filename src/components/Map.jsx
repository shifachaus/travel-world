import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import LeafletSearch from "./LeafletSearch";
import { NavigationArrow, Camera, Cube } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import MapActionButtons from "./MapActionButtons";
import { useMaps } from "../contexts/MapContext";

// Import mapbox access token
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const navigate = useNavigate();

  const { cities } = useCities();
  const { state, dispatch } = useMaps();

  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [mapLat, mapLng] = useUrlPosition();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  const handleLocationSelected = (location) => {
    console.log(state);
    dispatch({ type: "select/location", payload: location });
    setMapPosition([location.lat, location.lng]);
  };

  const takeScreenshot = () => {
    if (state.selectedLocation) {
      dispatch({ type: "show/scene" });
    }
  };

  const navigateToScene = () => {
    dispatch({ type: "hide/scene" });
    navigate("/scene", {
      state: { imageURL: state.selectedLocation.imageUrl },
    });
  };

  return (
    <div className="relative h-screen">
      <MapActionButtons
        takeScreenshot={takeScreenshot}
        navigateToScene={navigateToScene}
      />

      {!geolocationPosition && (
        <Button
          type={
            " z-[1000] absolute top-[35rem] right-3   bg-[#FAFCFF] py-2.5 px-4 rounded-md font text-zinc-500 border border-zinc-300 shadow-md"
          }
          onClick={getPosition}
        >
          {isLoadingPosition ? (
            "Loading..."
          ) : (
            <span className="flex gap-2 items-center uppercase text-[.7rem] font-semibold">
              Use your position <NavigationArrow size={22} color={"#313131"} />
            </span>
          )}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="h-[100%] w-full"
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />

        <LeafletSearch onLocationSelected={handleLocationSelected} />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
