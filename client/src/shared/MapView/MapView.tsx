import React from "react";
import { InitMap } from "types";
// todo: separate it ??
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./style.module.scss"

type MapViewProps = {
  initMap: ({ ...props }: InitMap) => {}
};

// todo: separate it ??
const centerCoordinates = {
  longitude: 30.523333,
  latitude: 50.450001
}

export function MapView({ initMap }: MapViewProps) {
  const mapRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    if ( mapRef.current ) {
      initMap(
        {
          container: mapRef.current,
          zoom: 10,
          centerCoordinates
        }
      )
    }
  })
  
  return (
    <div ref={ mapRef } className={ styles.map }/>
  );
}
