import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from '../signin/signin.component';


const Router = () => {
	return(
		<BrowserRouter>
				<Route path="/" component={Signin}/>
		</BrowserRouter>
	)
};

export default Router;