import React, { useRef, useEffect } from "react";

interface PlacesAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult) => void;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  onPlaceSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current!);

    autocomplete.setFields(["formatted_address", "geometry"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelect(place);
    });
  }, [onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search delivery location..."
      style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
    />
  );
};

export default PlacesAutocomplete;
