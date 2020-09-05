import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

//Styles
import useStyles from './login.styles';

const Login = () => {

  const classes = useStyles();

  return(
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.signinFormContainer} container item direction="column">
        <Typography className={classes.subGreeting}>Welcome back</Typography>
        <TextField className={classes.signinInput} label="Email" variant="outlined" />
        <TextField className={classes.signinInput} label="Password" variant="outlined" />
        <div className={classes.customButton}>Login</div>
      </Grid>
    </Grid>
  )
};

export default Login;