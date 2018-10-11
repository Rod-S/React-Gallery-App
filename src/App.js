import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Container from './Components/Container';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route
          path ='/:id'
          render={(props) => <Container {...props} /> }
        />
      </Switch>
    </div>
  </BrowserRouter>
    );

export default App;
