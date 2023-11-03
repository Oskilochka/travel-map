import React from 'react';
import {AppBar, Autocomplete, Box, InputBase, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import useStyles from "./styles"

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant={'h5'}>
                    Travel
                </Typography>
                <Box display={"flex"}>
                    <Typography className={classes.title} variant={'h6'}>
                        Find a new places
                    </Typography>
                    {/*<Autocomplete options={{}}>*/}
                    <div className={classes.search}>
                        <SearchIcon/>
                        <InputBase
                            classes={{root: classes.inputWrap, input: classes.inputField}}
                            placeholder={"Search"}
                        />
                    </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
