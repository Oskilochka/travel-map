import React from 'react';
import {Header, List, SimpleMap} from "./components";
import {createTheme, CssBaseline, Grid} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {getMarkers} from "./api";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
    const theme = createTheme()
    const [markers, setMarkers] = React.useState<any>()

    React.useEffect(() => {
        getMarkers().then(setMarkers);
    }, [])

    // const [showPopup, setShowPopup] = React.useState<boolean>(true);


    console.log(markers, 'places')

    return (
        <ThemeProvider theme={theme}>
            <SimpleMap>


                {/*{showPopup && (*/}
                {/*    <Popup*/}
                {/*        longitude={30.523333}*/}
                {/*        latitude={50.450001}*/}
                {/*        anchor="left"*/}
                {/*        onClose={() => setShowPopup(false)}*/}
                {/*    >*/}
                {/*        <PlaceCard title={"tet"}/>*/}
                {/*    </Popup>)}*/}
                {/*<Marker*/}
                {/*    longitude={30.523333}*/}
                {/*    latitude={50.450001}*/}
                {/*    anchor="bottom"*/}
                {/*    color="red"*/}
                {/*>*/}
                {/*    <FmdGoodIcon style={{fontSize: viewState.zoom * 6, color: "red"}}/>*/}
                {/*</Marker>*/}

            </SimpleMap>

            {/*<div className="App">*/}
            {/*    <CssBaseline/>*/}
            {/*    <Header/>*/}
            {/*    <Grid container spacing={3} style={{width: '100%'}}>*/}
            {/*        <Grid item xs={12} md={4}>*/}
            {/*            <List/>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={12} md={8}>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</div>*/}
        </ThemeProvider>
    );
}

export default App;
