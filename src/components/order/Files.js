import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  chip: {
    borderRadius: 0
  }
}));

function Files() {
  const classes = useStyles();
  
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        FILES (2)
      </Typography>
  
      <div>
        <Chip
          icon={<ImageIcon />}
          label="Site photo"
          className={classes.chip}
        />
      </div>
      
    </div>
  );
}

export default Files;
