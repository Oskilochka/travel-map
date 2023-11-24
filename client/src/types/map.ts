export type Coordinate = {
  longitude: number,
  latitude: number
}

export type InitMap = {
  container: HTMLDivElement,
  zoom: number,
  centerCoordinates: Coordinate
}
