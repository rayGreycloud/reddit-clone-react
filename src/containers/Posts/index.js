// src/containers/Posts/index.js

import React, { Component } from 'react';

class Posts extends Component {
  render() {
    // Check loading
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      // Map over data and render
      <div className="Posts">
        { this.props.posts.map(post => {
          return (
            <div>
              { post.title }
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
