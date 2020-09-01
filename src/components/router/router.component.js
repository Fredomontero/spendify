import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from '../../pages/signin/signin.page';
import Login from '../../pages/login/login.page';


const Router = () => {
	return(
		<BrowserRouter>
			<Route path="/" component={Signin}/>
			<Route path='/login' component={Login} />
		</BrowserRouter>
	)
};

export default Router;