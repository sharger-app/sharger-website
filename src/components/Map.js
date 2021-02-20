import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow,  } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import MapStyle from './MapStyle';
import index from '../index.css';

const libraries = ["places"];

const containerStyle = {
    width: "80vw",
    height: "51vw",
};

const center = {
    lat: 43.6532, 
    lng: -79.3832,
};

const options = {
    styles: MapStyle, 
    disableDefaultUI: true, 
    zoomControl: true,
};

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAD5HWvSSyyhaTKklV9V2beb5xgjRJEgLQ", 
    libraries,
  });
  const [markers, setMarkers] = React.useState([])
  const [selecters, setSelecters] = React.useState(null)

  const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [...current, 
        {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(), 
            time: new Date(),
        }, 
    ]);
  }, []);
// without using renders
  const mapRef = React.useRef();
  const onLoad = React.useCallback((map) => {
      mapRef.current = map;
  }, []);

    if (loadError) return "Err loading maps";
    if (!isLoaded) return "Loading Maps";

  return isLoaded ? (
    <>
      <div>
        <h1>Sharger</h1>
      </div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={13}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onLoad}
        // onUnmount={onUnmount}
    >
        {markers.map((marker) => (
        <Marker 
            key={marker.time.toISOString()} 
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
                url: "/sharger-marker.jpg",
                // Marker Size
                scaledSize: new window.google.maps.Size(40, 40),
                // Changing location of point of click
                orgin: new window.google.maps.Point(0, 0), 
                anchor: new window.google.maps.Point(20, 30),
            }}
            onClick={() => {
                setSelecters(markers);
            }}
        />
        ))}

      </GoogleMap>
    </>
  ) : <></>
}

export default Map;