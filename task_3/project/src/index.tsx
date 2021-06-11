import React from 'react';
import ReactDOM from 'react-dom';
import makeServer from "./api/index";

import App from './App';

makeServer()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
