import { Map } from "mapbox-gl";

const MAP_STYLE_URL = "mapbox://styles/oskilochka/cloo0w9go00e201pb29p5ejrj"

export const initMap = (container: HTMLDivElement, zoom: number, coordinates: [ number, number ]) => {
  return new Map({
    container,
    zoom,
    center: coordinates,
    style: MAP_STYLE_URL,
    pitchWithRotate: false,
    accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
    doubleClickZoom: false
  });
}
