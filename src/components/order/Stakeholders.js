import React from 'react';
import classnames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CommonExpansionPanel from '../common/CommonExpansionPanel';

const useStyles = makeStyles((theme) => ({
  statusSummary: {
    fontSize: '10px',
    lineHeight: '12px',
    marginLeft: '8px'
  },
  userInfoRoot: {
    margin: 0
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
  },
  disabled: {
    color: 'rgba(0, 0, 0, 0.5)'
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
      <CommonExpansionPanel
        title="STAKEHOLDERS"
        summaryComponent={<span className={classes.statusSummary}> 2 yes, 1 no, 1 pending</span>}
      >
        <List component="nav" aria-label="main mailbox folders" disablePadding>
          {users.map((user, i) => {
            const userClasses = classnames({
              [classes.decorated]: user.status === 'declined',
              [classes.disabled]: user.status === 'pending'
            });
            return (
              <ListItem key={`user-${i}`} disableGutters classes={{root: classes.listItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>
                  {user.status === 'ok' && <CheckCircleRoundedIcon style={{ fontSize: 14 }} color="primary" />}
                  {user.status === 'declined' && <CancelRoundedIcon style={{ fontSize: 14 }} color="secondary" />}
                  {user.status === 'pending' && <QueryBuilderRoundedIcon style={{ fontSize: 14 }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{root: classes.userInfoRoot, primary: classes.userInfo}}
                  className={userClasses}
                  primary={`${user.username} (${user.email})`}
                />
              </ListItem>
            );
          })}
        </List>
      </CommonExpansionPanel>
    </div>
  );
}

export default Stakeholders;
