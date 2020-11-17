import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function Routes() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default Routes;
