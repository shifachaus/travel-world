import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { useEffect, useRef } from "react";

const LeafletSearch = ({ onLocationSelected }) => {
  const map = useMap();
  const circleRef = useRef(null);

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();

    const searchControl = L.Control.geocoder({
      query: "",
      placeholder: "Search location",
      defaultMarkGeocode: true,
      geocoder,
    }).addTo(map);

    searchControl.on("markgeocode", async function (e) {
      const bbox = e.geocode.bbox;
      const center = bbox.getCenter();

      // Remove existing polygon
      if (circleRef.current) {
        map.removeLayer(circleRef.current);
      }

      // Calculate circle radius based on the bounding box
      const radius = map.distance(
        [bbox.getSouth(), bbox.getWest()],
        [bbox.getNorth(), bbox.getEast()]
      );

      // Create circle and add to map
      const circle = L.circle([bbox.getCenter().lat, bbox.getCenter().lng], {
        radius,
      }).addTo(map);

      // Save the new circle in ref
      circleRef.current = circle;

      // Fit map view to circle bounds
      map.fitBounds(circle.getBounds());

      // Capture the map area using Mapbox Static API
      const bounds = circle.getBounds();
      const northEast = bounds.getNorthEast();
      const southWest = bounds.getSouthWest();
      const width = 400; // width of the static image
      const height = 400; // height of the static image

      const response = await fetch(
        `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${
          southWest.lng
        },${southWest.lat},${northEast.lng},${
          northEast.lat
        }]/${width}x${height}?access_token=${
          import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
        }`
      );

      const imageUrl = response.url;

      // Pass selected location coordinates and image URL to parent component
      onLocationSelected({
        lat: center.lat,
        lng: center.lng,
        bounds: {
          northEast: {
            lat: northEast.lat,
            lng: northEast.lng,
          },
          southWest: {
            lat: southWest.lat,
            lng: southWest.lng,
          },
        },
        imageUrl,
      });
    });

    return () => map.removeControl(searchControl);
  }, [map, onLocationSelected]);

  return null;
};

export default LeafletSearch;
