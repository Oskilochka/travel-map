import React from "react";
import { createTheme, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import "mapbox-gl/dist/mapbox-gl.css";
import { Marker, Popup } from "react-map-gl";
import { Room } from "@mui/icons-material";
import { AuthComponent, Header, List, PlaceCard, SimpleMap } from "../components";
import { FormDialog } from "../components/LoginModal/LoginModal";

function App() {
  const theme = createTheme()
  const [ markers, setMarkers ] = React.useState<any>()
  
  React.useEffect(() => {
    // getMarkers().then(setMarkers);
  }, [])
  
  const [ showPopup, setShowPopup ] = React.useState<boolean>(false);
  console.log(markers, "places")
  
  
  return (
    <ThemeProvider theme={ theme }>
      <Header/>
      <Grid container spacing={ 3 } style={ { width: "50%" } }>
        <Grid item xs={ 12 } md={ 4 }>
          <AuthComponent/>
          <FormDialog setOpen={ setShowPopup } open={ showPopup }/>
          
          {/* favourites places*/ }
          {/* places to visit */ }
          {/* created markers */ }
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
    </ThemeProvider>
  );
}

export default App;
