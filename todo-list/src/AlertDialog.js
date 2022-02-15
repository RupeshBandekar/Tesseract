import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {

  const [open, setOpen] = React.useState(props.open);
  const [isYesClicked, setIsYesClicked] = React.useState(false);

  function handleClose() {
    console.log(isYesClicked);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={setIsYesClicked(true)}>Yes</Button>
          <Button onClick={setIsYesClicked(false)} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}