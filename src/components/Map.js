import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const mapStyles = {
    height: "50vh",
    width: "50%"
  };
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  }
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng })
  }
  function defaultCenter() {
    console.log("currentPosition", currentPosition);
    if (Object.keys(currentPosition).length === 0) {
      return setCurrentPosition({ lat: 45.5051, lng: -122.6750 });
    } else {
      return currentPosition
    }
  }
  // const onSelect = item => {
  //   setSelected(item);
  // }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
  console.log("defaultCenter", defaultCenter());
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter()} >
        {
          currentPosition.lat ?
            <Marker
              position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              draggable={true} /> :
            null
        }
      </GoogleMap>
    </LoadScript >
  )
}
export default MapContainer;
