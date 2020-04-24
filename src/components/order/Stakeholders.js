import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';

const useStyles = makeStyles((theme) => ({
}));

function Stakeholders() {
  const classes = useStyles();
  
  return (
    <div>
      <ExpansionPanel expanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            STAKEHOLDERS
            <span> 2 yes, 1 no, 1 pending</span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Steven Banks (steven@acme.com)" />
              </ListItem>
              
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Dan Smith (steven@acme.com)" />
              </ListItem>
              
              <ListItem button>
                <ListItemIcon>
                  <CancelRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Xavier King (x@y.com)" />
              </ListItem>
              
              <ListItem button>
                <ListItemIcon>
                  <QueryBuilderRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="John Boggs (steven@acme.com)" />
              </ListItem>
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Stakeholders;
