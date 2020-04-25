import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '13px',
    letterSpacing: '0.02em',
    color: 'rgba(0, 0, 0, 0.4)'
  },
  message: {
    fontSize: '11px',
    lineHeight: '20px',
    letterSpacing: '0.02em'
  }
}));

function Message() {
  const classes = useStyles();
  
  return (
    <div>
      <ExpansionPanel expanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon fontSize='small' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            MESSAGE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.message}>
            <div>Hi all, please see attached the latest design changes per our discussion and sign-off. Thanks!</div>
            <br/>
            <div>- Steven </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Message;
