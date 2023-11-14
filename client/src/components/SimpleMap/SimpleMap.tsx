import React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {PlaceCard} from "../PlaceCard";

type MapProps = {};

const defValue = {
    longitude: 30,
    latitude: 50,
    zoom: 6,
}

export const SimpleMap = (props: MapProps) => {
    const [viewState, setViewState] = React.useState(defValue);
    const [showPopup, setShowPopup] = React.useState<boolean>(true);
    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/oskilochka/cloo0w9go00e201pb29p5ejrj"
            style={{width: "100vw", height: "100vh"}}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        >
            {showPopup && (
                <Popup
                    longitude={30.523333}
                    latitude={50.450001}
                    anchor="left"
                    onClose={() => setShowPopup(false)}
                >
                    <PlaceCard title={"tet"}/>
                </Popup>)}
            <Marker
                longitude={30.523333}
                latitude={50.450001}
                anchor="bottom"
                color="red"
            >
                <FmdGoodIcon style={{fontSize: viewState.zoom * 6, color: "red"}}/>
            </Marker>
        </Map>
    );
};
