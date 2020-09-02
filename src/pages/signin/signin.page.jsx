import React from 'react';
import Grid from '@material-ui/core/Grid';

//Styles
import useStyles from './signin.styles';

const Signin = () => {

  const classes = useStyles();

  return(
    <Grid className={classes.container} container direction="column">
      Hola Mundo
    </Grid>
  )
};

export default Signin;