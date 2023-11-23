import React from "react";
import styles from "./styles.module.scss"
import { initMap } from "../MapComponent/mapbox";

type Props = {};

export function MapView(props: Props) {
  const mapRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    if(mapRef.current) {
       // initMap()
    }
  }, [])
  
  return (
    <div ref={ mapRef } className={ styles.map }>
    
    </div>
  );
}
