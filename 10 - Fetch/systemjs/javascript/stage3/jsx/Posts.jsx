/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Post from './Post';

export default class Posts extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { posts: [], error: '', isFetching: false };

  componentDidMount() {
    this.setState({isFetching: true});
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then(json => { this.setState({ posts: json, isFetching: false }); })
      .catch(error => { this.setState({ error: error.message, isFetching: false }); });
  }
  render() {
    return (
      <div>
        {this.state.isFetching && <div>Fetching...</div>}
        {this.state.error ? <div style={{color: 'red'}}>{this.state.error}</div> : null}
        <ul>{
          this.state.posts.map((post) => <Post key={post.id} title={post.title} />)
        }</ul>
      </div>
    );
  }
}
