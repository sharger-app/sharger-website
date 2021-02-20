import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api";
// import { formatRelative } from "date-fns";
import MapStyle from "./MapStyle"

const libraries = ["places"];

const mapContainerStyle = {
    width: "50vw",
    height: "50vw",
};
const center = {
    lat: 43.6532, 
    lng: -79.3832,
};
const options = {
    styles: MapStyle, 
};

function Map() {
    const { isLoaded, loadErr } = useLoadScript({
        // Key: 'AIzaSyAD5HWvSSyyhaTKklV9V2beb5xgjRJEgLQ',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
        libraries,
    });
    if (loadErr) return "Err loading maps";
    if (!isLoaded) return "Loading Maps";
    return (
        <div>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            ></GoogleMap>
            
        </div>


    )
}
export default Map;