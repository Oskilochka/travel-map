import React from "react";
import { Box, createTheme, CssBaseline, Grid, Paper, styled } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import "mapbox-gl/dist/mapbox-gl.css";
import { Header, List, PlaceCard, SimpleMap } from "components";
import { Marker, Popup } from "react-map-gl";
import { Room } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    }
  }
});

function App() {
  const theme = createTheme()
  
  const [ showPopup, setShowPopup ] = React.useState<boolean>(false);
  
  return (
    <ThemeProvider theme={ theme }>
      <Box sx={ { flexGrow: 1 } }>
        <Grid>
          <Header/>
        </Grid>
        <Grid container spacing={ 3 } style={ { width: "50%" } }>
          <Grid item xs={ 12 } md={ 4 }>
            favourites places
            places to visit
            created markers
            <List/>
          </Grid>
          <Grid item xs={ 12 } md={ 8 }>
            <SimpleMap>
              { showPopup && (
                <Popup
                  longitude={ 30.523333 }
                  latitude={ 50.450001 }
                  anchor="top"
                  onClose={ () => setShowPopup(false) }
                >
                  <PlaceCard title={ "tet" }/>
                </Popup>) }
              <Marker
                longitude={ 30.523333 }
                latitude={ 50.450001 }
                anchor="bottom"
                color="red"
              >
                <Room style={ { color: "red" } }/>
              </Marker>
            </SimpleMap>
          </Grid>
        </Grid>
      </Grid>
    </Box>
</ThemeProvider>)

}

export default App;
