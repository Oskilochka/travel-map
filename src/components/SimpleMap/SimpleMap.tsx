import React from 'react';
import Map from 'react-map-gl';

type MapProps = {};

const defValue = {
    longitude: 30,
    latitude: 50,
    zoom: 6,
}

export const SimpleMap = (props: MapProps) => {
    const [viewState, setViewState] = React.useState(defValue);

    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{width: "100vw", height: "100vh"}}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        />
    );
};
