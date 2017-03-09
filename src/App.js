import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { hashHistory, Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './router.js';

class App extends Component {

  render() {
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
        <Router history={hashHistory} routes={routes} />
      </MuiThemeProvider>
    );
  }
}

export default App;
