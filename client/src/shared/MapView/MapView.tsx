import React from "react";
import { InitMap } from "types";
import styles from "./style.module.scss"
import { useMap } from "./useMap";

// todo: separate it ??

type MapViewProps = {
  initMap: ({ ...props }: InitMap) => {}
};

export function MapView({ initMap }: MapViewProps) {
  
  const mapRef = React.useRef<HTMLDivElement>(null)
  useMap(mapRef, initMap);
  
  return (
    <div ref={ mapRef } className={ styles.map }/>
  );
}
