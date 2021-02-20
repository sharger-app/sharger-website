import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, } from '@react-google-maps/api';
import MapStyle from './MapStyle';
import index from '../index.css';

import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption, } from "@reach/combobox";

import "@reach/combobox/styles.css"; 
const libraries = ["places"];

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
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panningTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panningTo({ lat, lng });
        mapRef.current.setZoom(18);
    }, []);

    if (loadError) return "Err loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            {/* <div>
                <h1>Sharger</h1>
            </div> */}
            <Search panningTo={panningTo} />
            <GoogleMap
                id="map"
                mapContainerStyle={containerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
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
                            origin: new window.google.maps.Point(0, 0),
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
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
}

function Search({ panningTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 43.6532,
                lng: () => -79.3832
            },
            radius: 200 * 1000,
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
      };
    
    const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
        const result = await getGeocode({ address });
        const { lat, lng } = await getLatLng(result[0]);
        panningTo({ lat, lng });
    } catch (error) {
        console.log("Error: ", error);
    }
    };
    
    return (
        <div className="SearchEngine">
            <Combobox 
            onSelect={(address) => {
                console.log(address);
            }}
            >
                {/*  onSelect={handleSelect} */}
                <ComboboxInput 
                    value={value} 
                    onChange={handleInput} 
                    disabled={!ready}
                    placeholder="Find a Sharger"
                />
                <ComboboxPopover>

                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => ( 
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                    
                </ComboboxPopover>
            </Combobox>
        </div>

    );

}

export default Map;