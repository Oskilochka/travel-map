import React from 'react';
import {Header, List, SimpleMap} from "./components";
import {createTheme, CssBaseline, Grid} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {getPlaceInfo} from "./api";

function App() {
    const theme = createTheme()
    const [places, setPlaces] = React.useState<any>()

    React.useEffect(() => {
        getPlaceInfo().then(setPlaces);
    }, [])

    console.log(places, 'places')

    return (
        <ThemeProvider theme={theme}>
            <SimpleMap/>

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
