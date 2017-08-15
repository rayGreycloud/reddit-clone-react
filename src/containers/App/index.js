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

  componentWillMount() {
    // Get posts reference from db
    let postsRef = firebase.database().ref('posts');
    // Preserve scope
    let _this = this;
    // Get updated value anytime db changes
    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());

      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h3>reddit.clone</h3>
        {
          // If props exist, clone element
          // and pass props to children
        }
        {this.props.children &&
          React.cloneElement(this.props.children, {
            firebaseRef: firebase.database().ref('posts'),
            posts: this.state.posts,
            loading: this.state.loading
          })}
      </div>
    );
  }
}

export default App;
