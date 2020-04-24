import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import StreetImg from '../../images/street.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%'
  }
}));

function Address() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <img src={StreetImg} alt="" className={classes.img}/>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h6" gutterBottom>
          Louver design change on market street south side partition D-53 with butterfly stele
        </Typography>
        <Typography variant="caption" gutterBottom>
          April 21, 2020, 1:29 AM (31 minutes ago)
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Address;
