import React from 'react';

const Login = (props) => {

  React.useEffect(() => {
    console.log(props);
  }, []);

  return(
    <div>This is Login Page</div>
  )
}

export default Login;