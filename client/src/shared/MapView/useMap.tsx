import React from "react";
import { InitMap } from "types";

// fix relation
import { Map } from "mapbox-gl";
import { generateMarker } from "./generateMarker";
// make it general map type
type MapGeneral = Map;

// todo: separate it ??
const centerCoordinates = {
  longitude: 30.523333,
  latitude: 50.450001
}

export const useMap = (container: React.RefObject<HTMLDivElement>, initMap: ({ ...props }: InitMap) => any) => {
  const mapInitRef = React.useRef<MapGeneral | null>(null);
  
  React.useEffect(() => {
    if ( container.current ) {
      mapInitRef.current = initMap({
        container: container.current,
        zoom: 10,
        centerCoordinates
      })
    }
  })
  
  React.useEffect(() => {
    mapInitRef.current && mapInitRef.current.on("load",
      () => generateMarker(
        { map: mapInitRef.current!, ...mapInitRef.current!.getCenter() })
    )
    
    return () => {
      mapInitRef.current?.off("load", generateMarker)
    }
  }, [])
};

