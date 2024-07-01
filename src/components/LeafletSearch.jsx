import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { useEffect, useRef } from "react";

const LeafletSearch = () => {
  const map = useMap();
  const polygonRef = useRef(null);

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();

    const searchControl = L.Control.geocoder({
      query: "",
      placeholder: "Search location",
      defaultMarkGeocode: true,
      geocoder,
    }).addTo(map);

    searchControl.on("markgeocode", function (e) {
      const bbox = e.geocode.bbox;

      // Remove existing polygon
      if (polygonRef.current) {
        map.removeLayer(polygonRef.current);
      }

      const poly = L.polygon([
        [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
        [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
        [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
        [bbox.getSouthWest().lat, bbox.getSouthWest().lng],
      ]).addTo(map);

      // Save the new polygon in ref
      polygonRef.current = poly;

      map.fitBounds(poly.getBounds());
    });

    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
};

export default LeafletSearch;
