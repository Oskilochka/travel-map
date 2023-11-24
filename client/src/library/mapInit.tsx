import { Map } from "mapbox-gl";
import { InitMap } from "types";

const MAP_STYLE_URL = "mapbox://styles/oskilochka/cloo0w9go00e201pb29p5ejrj"

// todo: add proxy ?

export const initMap = (
  {
    container,
    zoom,
    centerCoordinates
  }: InitMap) => {
  return new Map({
    container,
    zoom,
    center: [ centerCoordinates.longitude, centerCoordinates.latitude ],
    style: MAP_STYLE_URL,
    pitchWithRotate: false,
    doubleClickZoom: false,
    accessToken: process.env.REACT_APP_MAP_API_KEY,
  });
}
