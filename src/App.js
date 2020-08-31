import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import Login from './components/login/login.component';
import Home from './components/home/home.component';
import Dashboard from './components/dashboard/dashboard.component';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/login">Login</Link><br/>
        <Link to="/dashboard">Dashboard</Link><br/>
      </div>
      <Route path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Router>
  );
}

export default App;