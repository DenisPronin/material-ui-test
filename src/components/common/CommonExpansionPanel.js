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
  }
}));

function CommonExpansionPanel(props) {
  const classes = useStyles();
  
  return (
    <div>
      <ExpansionPanel expanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            {props.title}
          </Typography>
          {props.summaryComponent}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default CommonExpansionPanel;
