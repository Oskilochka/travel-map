import React from "react";
import { ThemeProvider } from "@mui/styles";
import { Header, List, MapComponent, MainLayout } from "components";
import { theme } from "./styles";

// routing ?
function App() {
  return (
    <ThemeProvider theme={ theme }>
      <MainLayout
        headerComponent={ <Header/> }
        sideMenuComponent={ <List/> }
        mapComponent={ <MapComponent/> }
      />
    </ThemeProvider>
  )
}

export default App;
