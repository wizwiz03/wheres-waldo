import React from 'react';
import ReactDOM from 'react-dom';

import { app } from './firebase.config';

import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
