import React from 'react';
import Map from 'react-map-gl';

type MapProps = {
    children?: React.ReactNode
};

const MAP_STYLE_URL = "mapbox://styles/oskilochka/cloo0w9go00e201pb29p5ejrj"

const defValue = {
    longitude: 30,
    latitude: 50,
    zoom: 6,
}

export const SimpleMap = ({children}: MapProps) => {
    const [viewState, setViewState] = React.useState(defValue);

    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{width: "100%", height: "100%"}}
            mapStyle={MAP_STYLE_URL}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        >
            {children}
        </Map>
    );
};
