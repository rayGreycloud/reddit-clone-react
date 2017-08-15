// src/containers/App/index.js

import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();

    // Initialize firebase
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <h3>reddit.clone</h3>
      </div>
    );
  }
}

export default App;
