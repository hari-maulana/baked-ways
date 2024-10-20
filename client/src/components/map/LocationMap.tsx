import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Libraries,
} from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutocomplete";
import { Icon } from "@iconify/react/dist/iconify.js";

const libraries: Libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -6.3013588, // Initial map center latitude
  lng: 106.7351569, // Initial map center longitude
};

export const LocationMap: React.FC = () => {
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [address, setAddress] = useState<string>("");
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  // Function to handle when a place is selected from autocomplete
  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (place.geometry) {
      const lat = place.geometry.location?.lat();
      const lng = place.geometry.location?.lng();
      if (lat && lng) {
        setSelected({ lat, lng });
      }
      setAddress(place.formatted_address || "");
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCEmwBKcJT8G46hTjvL9_9jsvykPSzjprM"
      /*{process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}*/

      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={selected || center}
        zoom={15}
        onClick={(e) =>
          setSelected({ lat: e.latLng?.lat()!, lng: e.latLng?.lng()! })
        }
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
      <div>
        <p>
          <strong>Selected Address:</strong> {address}
        </p>
        {selected && (
          <p>
            <strong>Coordinates:</strong> Latitude: {selected.lat}, Longitude:{" "}
            {selected.lng}
          </p>
        )}
      </div>
      <div className="mt-4 flex gap-10">
        <PlacesAutocomplete onPlaceSelect={handlePlaceSelect} />
        <button
          onClick={() => setIsMapOpen(!isMapOpen)}
          className="bg-gray-800 inline-flex items-center justify-center px-8 py-2 hover:opacity-80 rounded-lg w-auto gap-3"
        >
          <Icon icon="hugeicons:maps-location-01" className="text-white" />

          <p className="text-white text-sm font-bold whitespace-nowrap">
            {isMapOpen ? "Close Map" : "Select on Map"}
          </p>
        </button>
      </div>
    </LoadScript>
  );
};
