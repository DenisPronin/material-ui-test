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
  heading: {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '13px',
    letterSpacing: '0.02em',
    color: 'rgba(0, 0, 0, 0.4)'
  },
  statusSummary: {
    fontSize: '10px',
    lineHeight: '12px',
    marginLeft: '8px'
  },
  userInfo: {
    fontSize: '11px',
    lineHeight: '13px'
  },
  listItem: {
    '&:first-child': {
      paddingTop: 0
    }
  },
  listItemIcon: {
    minWidth: 'auto',
    marginRight: '16px'
  },
  decorated: {
    textDecoration: 'line-through'
  }
}));

function Stakeholders() {
  const classes = useStyles();
  
  const users = [
    {
      username: 'Steven Banks',
      email: 'steven@acme.com',
      status: 'ok'
    }, {
      username: 'Dan Smith',
      email: 'steven@acme.com',
      status: 'ok'
    }, {
      username: 'Xavier King',
      email: 'x@y.com',
      status: 'declined'
    }, {
      username: 'John Boggs',
      email: 'steven@acme.com',
      status: 'pending'
    }
  ];
  
  return (
    <div>
      <ExpansionPanel expanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            STAKEHOLDERS
          </Typography>
          <span className={classes.statusSummary}> 2 yes, 1 no, 1 pending</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <List component="nav" aria-label="main mailbox folders" disablePadding>
              {users.map((user, i) => {
                return (
                  <ListItem key={`user-${i}`} disableGutters classes={{root: classes.listItem}}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>
                      {user.status === 'ok' && <CheckCircleRoundedIcon fontSize="small" color="primary" />}
                      {user.status === 'declined' && <CancelRoundedIcon fontSize="small" color="secondary" />}
                      {user.status === 'pending' && <QueryBuilderRoundedIcon fontSize="small" />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{primary: classes.userInfo}}
                      className={user.status === 'declined' ? classes.decorated: ''}
                      primary={`${user.username} (${user.email})`}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Stakeholders;
