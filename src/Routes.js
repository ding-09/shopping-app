import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OrderPage from './components/OrderPage';
import ShoppingCart from './components/ShoppingCart';


function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={OrderPage}/>
      </Switch>
    </Router>
  );
}

export default Routes;
