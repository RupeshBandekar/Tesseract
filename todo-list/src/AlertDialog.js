import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {

  const [isYesClicked, setIsYesClicked] = React.useState(false);

  function handleButtonClick(shouldDelete) {
    setIsYesClicked(shouldDelete);
    props.setOpen(false);
  }

  function handleClose() {
    if (isYesClicked) {
      props.handleAlertClose(isYesClicked);
      setIsYesClicked(false);
    }
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose()}
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
          <Button onClick={() => handleButtonClick(true)}>Yes</Button>
          <Button onClick={() => handleButtonClick(false)} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}