import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AuthComponent } from "../Auth";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FormDialog = ({ open, setOpen }: any) => {
  // const [ open, setOpen ] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={ handleClickOpen }>
        Open form dialog
      </Button>
      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>
          <Typography variant="h5">Login Form</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={ handleClose }
          sx={ {
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          } }
        >
          <CloseIcon/>
        </IconButton>
        <DialogContent>
          <AuthComponent/>
          {/*<DialogContentText>*/ }
          {/*  Some text*/ }
          {/*</DialogContentText>*/ }
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
          {/*<Button onClick={ handleClose }>Subscribe</Button>*/ }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
