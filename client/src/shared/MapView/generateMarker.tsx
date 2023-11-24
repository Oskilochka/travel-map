import { Marker, Popup, Map } from "mapbox-gl";

type GenerateMarker = {
  lng: number,
  lat: number,
  map: Map
};

export const generateMarker = ({ lat, lng, map }: GenerateMarker) => {
  const popup = new Popup(
    {
      closeButton: false,
      anchor: "left",
    }).setHTML(`<div class="popup">You click here: <br/>[${ lng },  ${ lat }]</div>`)
  
  new Marker({ color: "red", scale: 1.5 })
    .setLngLat([ lng, lat ])
    .setPopup(popup)
    .addTo(map)
};
