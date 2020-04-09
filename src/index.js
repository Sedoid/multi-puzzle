import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import levelFactory from './lib/levels-factory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




ReactDOM.render(
  <MuiThemeProvider>
    <App level={levelFactory(5 ** 2)} />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

