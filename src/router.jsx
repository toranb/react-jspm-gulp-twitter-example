import React from 'react';
import ReactRouter from 'react-nested-router';

import App from './app';
import Analytics from './analytics';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

export default Router(
  <Route handler={App}>
    <Route name="analytics" path="analytics" handler={Analytics}></Route>
  </Route>
)
