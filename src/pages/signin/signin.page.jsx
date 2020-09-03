import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

//Styles
import useStyles from './signin.styles';

const Signin = () => {

  const classes = useStyles();

  return(
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.signinFormContainer} container item direction="column">
        <Typography>Hola prros</Typography>
      </Grid>
    </Grid>
  )
};

export default Signin;