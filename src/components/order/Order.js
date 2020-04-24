import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Address from './Address';
import Stakeholders from './Stakeholders';
import Message from './Message';
import Files from './Files';
import ShareIcon from '@material-ui/icons/Share';

const styles = (theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}&nbsp;</Typography>
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon/>
      </IconButton>
    </MuiDialogTitle>
  );
});

function Order() {
  const [open, setOpen] = React.useState(true);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Open dialog</Button>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='sm' fullWidth>
        
        <DialogTitle id="customized-dialog-title" onClose={handleClose}/>
        
        <MuiDialogContent>
          <Address />

          <Divider/>
  
          <Stakeholders />
          
          <Message />
          
          <Files />
        </MuiDialogContent>
        
        <Divider/>
        
        <MuiDialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            SIGN_OFF
          </Button>
          <Button variant="outlined" onClick={handleClose} color="secondary">
            REJECT
          </Button>
  
          <IconButton aria-label="share">
            <ShareIcon fontSize="large" />
          </IconButton>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}

export default Order;
