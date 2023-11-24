import React from "react";
import { IconButton, Typography, Button, Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AuthComponent } from "features";

type FormDialogProps = {
  open: boolean,
  handleClose: () => void
}

export const FormDialog = ({ open, handleClose }: FormDialogProps) => {
  
  return (
    <React.Fragment>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
