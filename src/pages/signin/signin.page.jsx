import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

//Styles
import useStyles from './signin.styles';

const Signin = () => {

  const classes = useStyles();

  return(
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.signinFormContainer} container item direction="column">
        <Typography className={classes.greeting}>Hi there,</Typography>
        <Typography className={classes.subGreeting}>let's get started by creating a new account</Typography>
        <TextField className={classes.signinInput} label="Full name" variant="outlined" />
        <TextField className={classes.signinInput} label="Email" variant="outlined" />
        <TextField className={classes.signinInput} label="Password" variant="outlined" />
        <TextField className={classes.signinInput} label="Confirm Password" variant="outlined" />
        <div className={classes.customButton}>Signin</div>
      </Grid>
    </Grid>
  )
};

export default Signin;