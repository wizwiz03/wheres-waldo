import React from 'react';
import ReactDOM from 'react-dom';

import { app } from './firebase.config';

import RouteSwitch from './components/RouteSwitch';


ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
