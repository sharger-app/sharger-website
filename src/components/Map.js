import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import MapStyle from './MapStyle';
import index from '../index.css';

import usePlaceAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css"; const libraries = ["places"];

const containerStyle = {
    width: "100%",
    height: "100vh",
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

    const panningTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panningTo({ lat, lng });
        mapRef.current.setZoom(20);
    }, []);

    if (loadError) return "Err loading maps";
    if (!isLoaded) return "Loading Maps";

    return isLoaded ? (
        <>
            {/* <div>
                <h1>Sharger</h1>
            </div> */}
            <Search panningTo={panningTo}/>
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
                        // show info box whenever the marker is clicked
                        onClick={() => {
                            setSelecters(marker);
                        }}
                    />
                ))}
                {selecters ? (
                    <InfoWindow
                        position={{ lat: selecters.lat, lng: selecters.lng }}
                        onCloseClick={() => {
                            // close info box whenever the marker is clicked
                            setSelecters(null);
                        }}>
                        <div>
                            <h2>Review</h2>
                        </div>
                    </InfoWindow>) : null}
            </GoogleMap>
        </>
    ) : <></>
}

function Search({ panningTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlaceAutocomplete({
        requestOptions: {
            location: {
                lat: () => 43.6532,
                lng: () => -79.3832
            },
            radius: 200 * 1000,
        },
    });

    return (
        <div className="SearchEngine">
            <Combobox 
                onSelect={async (address) => {
                    try {
                        const results = await getGeocode({address});
                        const { lat, lng } = await getLatLng(results[0]);
                        // console.log(lat, lng);
                        panningTo({ lat, lng });

                    } catch (error) {
                        console.log("ERR")
                    }
                    // console.log(address);
                }}
            >
                <ComboboxInput 
                    value={value} 
                    onChange={(e) => {
                        setValue(e.target.value);
                    }} 
                    disabled={!ready}
                    placeholder="Find a Sharger"
                />
                <ComboboxPopover>
                    {status === "OK" && data.map(({ id, description }) => ( 
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>

    );

}

export default Map;