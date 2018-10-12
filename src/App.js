import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import Container from './Components/Container';
import NotFound from './Components/NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route
          exact path='/:id'
          render={(props) => <Container  {...props} />}
        />
        <Route
          path ='/search/:id'
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
