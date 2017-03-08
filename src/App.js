import React, { Component } from 'react';
import './App.css';
import { hashHistory, Router } from 'react-router';

import routes from './router.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Router history={hashHistory} routes={routes} />
      </div>
    );
  }
}

export default App;
