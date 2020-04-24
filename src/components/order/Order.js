import React from 'react';
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
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  dialogActions: {
    justifyContent: 'flex-start',
    padding: '8px 24px'
  },
  actionBtn: {
    width: '110px',
    '&:not(:first-child)': {
      marginLeft: '16px'
    }
    
  },
  shareBtn: {
    marginLeft: 'auto !important'
  }
}));

function Order() {
  const classes = useStyles();
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
  
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">&nbsp;</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
        </MuiDialogTitle>
        
        <MuiDialogContent>
          <Address />

          <Divider/>
  
          <Stakeholders />
          
          <Message />
          
          <Files />
        </MuiDialogContent>
        
        <Divider/>
        
        <MuiDialogActions classes={{root: classes.dialogActions}} disableSpacing>
          <Button variant="contained" onClick={handleClose} color="primary" className={classes.actionBtn}>
            SIGN-OFF
          </Button>
          <Button variant="outlined" onClick={handleClose} color="secondary" className={classes.actionBtn}>
            REJECT
          </Button>
  
          <IconButton aria-label="share" size='medium' classes={{root: classes.shareBtn}}>
            <ShareIcon />
          </IconButton>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}

export default Order;
