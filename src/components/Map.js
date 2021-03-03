import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "50%"
  };

  const defaultCenter = {
    lat: 45.5051, lng: -122.6750
  }
  return (
    <LoadScript
      googleMapsApiKey = {process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript >
  )
}
export default MapContainer;
