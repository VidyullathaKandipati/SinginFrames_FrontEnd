import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { createStore } from 'redux';
// import todoApp from './reducers'
import App from './App';
import './index.css';
import AppBarSide from './components/SideNavbar/AppBarSide.js'


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
