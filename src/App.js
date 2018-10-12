import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//import Header from './Header';
import Container from './Components/Container';
import NotFound from './Components/NotFound';
;

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route
          exact path='/'
          render={(props) => <Redirect to="/cats" {...props} />}
        />*}
        <Route
          exact path ='/:id'
          render={(props) => <Container {...props} /> }
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
