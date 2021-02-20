import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow,  } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import MapStyle from './MapStyle'

const libraries = ["places"];

const containerStyle = {
    width: "50vw",
    height: "51vw",
};

const center = {
    lat: 43.6532, 
    lng: -79.3832,
};

const options = {
    styles: MapStyle, 
};

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAD5HWvSSyyhaTKklV9V2beb5xgjRJEgLQ", 
    libraries,
  });

    if (loadError) return "Err loading maps";
    if (!isLoaded) return "Loading Maps";

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={center}
        options={options}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map;