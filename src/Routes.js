import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/statistics">
        <h1>Statistics Page</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
