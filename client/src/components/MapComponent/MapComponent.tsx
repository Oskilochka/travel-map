import React from "react";
import { Marker, Popup } from "react-map-gl";
import { PlaceCard } from "../PlaceCard";
import { Room } from "@mui/icons-material";
import { SimpleMap } from "../SimpleMap";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {};

export function MapComponent({}: Props) {
  const [ showPopup, setShowPopup ] = React.useState<boolean>(false);
  
  return (
    <SimpleMap>
      
      { showPopup && (
        <Popup
          longitude={ 30.523333 }
          latitude={ 50.450001 }
          anchor="top"
          onClose={ () => setShowPopup(false) }
        >
          <PlaceCard title={ "tet" }/>
        </Popup>) }
      <Marker
        longitude={ 30.523333 }
        latitude={ 50.450001 }
        anchor="bottom"
        color="red"
      >
        <Room style={ { color: "red" } }/>
      </Marker>
    </SimpleMap>
  );
}
