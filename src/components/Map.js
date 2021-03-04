import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDispatch } from "react-redux";
// import useStore from "../custom-hooks/useStore";
import * as c from "../actions/ActionTypes";
import * as a from "../actions/";


const MapContainer = () => {
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState({});
  // const [storePosition, dispatch ] = useStore(currentPosition);
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
    dispatch({type: c.ADD_COORDINATES, coordinates: currentPosition})
    
  }
  

  function defaultCenter() {
    // console.log("currentPosition", currentPosition);
    if (Object.keys(currentPosition).length === 0) {
      setCurrentPosition({ lat: 45.5051, lng: -122.6750 });
      dispatch({type: c.ADD_COORDINATES, coordinates: currentPosition});
      return currentPosition;
    } else {
      dispatch({type: c.ADD_COORDINATES, coordinates: currentPosition});
      return currentPosition;
    }
  }
  // const onSelect = item => {
  //   setSelected(item);
  // }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
  // console.log("defaultCenter", defaultCenter());
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
