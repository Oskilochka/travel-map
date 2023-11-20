import React from 'react';
import useStyles from "./styles";
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {PlaceCard} from '../PlaceCard';
import {Place, PlaceType, Rate} from "./types";

type ListProps = {};

const places: Place[] = [
    {
        id: "2",
        title: "ef"
    },
    {
        id: "2",
        title: "ef"
    }
]

export const List = (props: ListProps) => {
    const classes = useStyles();
    const [type, setType] = React.useState<PlaceType>();
    const [rate, setRate] = React.useState<PlaceType>();

    const onChangeHandler = (e: any) => {
        setType(e.target.value)
    }

    return (
        <div className={classes.wrap}>
            <Typography variant={"h4"}>Places around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    label={"Type"}
                    className={classes.formControl}
                    value={type}
                    onChange={onChangeHandler}
                >
                    <MenuItem value={PlaceType.attraction}>Attractions</MenuItem>
                    <MenuItem value={PlaceType.hotels}>Hotels</MenuItem>
                    <MenuItem value={PlaceType.restaurants}>Restaurants</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="rate-label">Rate</InputLabel>
                <Select labelId="rate-label" label={"Rate"} className={classes.formControl} value={type}
                        onChange={onChangeHandler}>
                    <MenuItem value={Rate.all}>All</MenuItem>
                    <MenuItem value={Rate.moreThanTwo}>2+</MenuItem>
                    <MenuItem value={Rate.moreThanThree}>3+</MenuItem>
                    <MenuItem value={Rate.moreThanFour}>4+</MenuItem>
                </Select>
            </FormControl>
            <Grid
                container
                spacing={3}
                className={classes.list}
            >
                {places?.map((place, index) => {
                    return <Grid item xs={12} key={index}>
                        <PlaceCard title={place.title}/>
                    </Grid>
                })}
            </Grid>
        </div>
    );
};
