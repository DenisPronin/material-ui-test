import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '24px',
    marginBottom: '28px'
  },
  heading: {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '13px',
    letterSpacing: '0.02em',
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: '16px'
  },
  chip: {
    borderRadius: 0,
    backgroundColor: 'rgba(26, 35, 126, 0.1)',
    marginRight: '16px',
    width: '120px'
  },
  chipIcon: {
    color: '#009688'
  }
}));

function Files() {
  const classes = useStyles();
  const files = [
    {
      fileName: 'Site photo'
    },
    {
      fileName: 'Louver design'
    }
  ];
  
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom className={classes.heading}>
        FILES ({files.length})
      </Typography>
  
      <div>
        {files.map((file, i) => {
          return (
            <Chip
              key={`chip-${i}`}
              icon={<ImageIcon fontSize="small" />}
              label={file.fileName}
              className={classes.chip}
              classes={{icon: classes.chipIcon}}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Files;
