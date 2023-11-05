import React, {useState} from 'react';
import GoogleMapReact from "google-map-react"

import useStyles from "./styles"
import {useMediaQuery} from "@mui/material";

type MapProps = {};

const coordinates = {
    lat: 0,
    lng: 0
}

export const Map = (props: MapProps) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)')


    return (
        <div className={classes.mapWrap}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.MAP_KEY || ''}}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={[] as any}
                onChange={() => {}}
                onChildClick={() => {}}
                defaultCenter={coordinates}
                center={coordinates}
            >
            </GoogleMapReact>

        </div>
    );
};
