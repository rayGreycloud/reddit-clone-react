// routes.js

import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';

const Routes = () =>
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>;

export default Routes;
