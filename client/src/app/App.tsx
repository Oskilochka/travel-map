import React from "react";
import { ThemeProvider } from "@mui/styles";
import { List } from "components";
import { Header, MainLayout } from "shared";
import { initMap } from "library";
import { MapView } from "shared";
import { theme } from "./styles";

import "mapbox-gl/dist/mapbox-gl.css";


function App() {
  return (
    <ThemeProvider theme={ theme }>
      <MainLayout
        headerComponent={ <Header/> }
        sideMenuComponent={ <List/> }
        mapComponent={ <MapView initMap={ initMap } /> }
      />
    </ThemeProvider>
  )
}

export default App;
