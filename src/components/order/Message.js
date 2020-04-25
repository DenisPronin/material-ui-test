import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CommonExpansionPanel from '../common/CommonExpansionPanel';

const useStyles = makeStyles((theme) => ({
  message: {
    fontSize: '11px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    paddingRight: '48px'
  }
}));

function Message() {
  const classes = useStyles();
  
  return (
    <div>
      <CommonExpansionPanel title="MESSAGE">
        <div className={classes.message}>
          <div>Hi all, please see attached the latest design changes per our discussion and sign-off. Thanks!</div>
          <br/>
          <div>- Steven </div>
        </div>
      </CommonExpansionPanel>
    </div>
  );
}

export default Message;
