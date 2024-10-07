import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 40.712776, // Example latitude (New York City)
  lng: -74.005974, // Example longitude
};

const GoogleMapComponent = () => {
  // Load Google Maps API asynchronously using useJsApiLoader
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerClassName='w-full h-96' center={center} zoom={10}>
      {/* You can add markers, etc. here */}
    </GoogleMap>
  ) : (
    <div>Loading...</div> // Show a loading state while the map is loading
  );
};

export default GoogleMapComponent;
