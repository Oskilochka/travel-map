import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { FormDialog } from "library";
import useStyles from "./styles"

export const Header = () => {
  const classes = useStyles();
  const [ isLogin, setIsLogin ] = React.useState(false)
  
  const onLoginHandler = () => {
    setIsLogin(state => !state)
  }
  
  // on click open a modal if user is not login , but if you logined open modal with confirmation of existing
  
  return (
    <AppBar position={ "static" }>
      <Toolbar className={ classes.toolbar }>
        <Typography variant={ "h5" }>
          Travel
        </Typography>
        <Box>
          <Button
            onClick={ onLoginHandler }
            variant="contained"
            color="secondary"
            className={ classes.loginBtn }
          >
            { isLogin
              ? <><LogoutIcon/>Logout</>
              : <><LoginIcon/>Login</>
            }
          </Button>
        </Box>
      </Toolbar>
      <FormDialog handleClose={ onLoginHandler } open={ isLogin }/>
    </AppBar>
  );
};
