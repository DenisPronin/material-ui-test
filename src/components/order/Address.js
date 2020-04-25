import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import StreetImg from '../../images/street.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%'
  },
  col: {
    paddingTop: '0 !important'
  },
  headerContainer: {
    paddingRight: '48px'
  },
  header: {
    fontSize: '1rem',
    lineHeight: 1.2,
    marginBottom: '20px'
  },
  subTitle: {
    lineHeight: '14px',
    marginBottom: '20px'
  }
}));

function Address() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} className={classes.col}>
        <img src={StreetImg} alt="" className={classes.img}/>
      </Grid>
      <Grid item xs={9} className={classes.col}>
        <div className={classes.headerContainer}>
          <Typography variant="h6" className={classes.header}>
            Louver design change on market street south side partition D-53 with butterfly stele
          </Typography>
          <Typography variant="caption" component="h6" className={classes.subTitle}>
            April 21, 2020, 1:29 AM (31 minutes ago)
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Address;
