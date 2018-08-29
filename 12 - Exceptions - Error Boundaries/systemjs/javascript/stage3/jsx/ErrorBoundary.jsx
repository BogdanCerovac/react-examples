/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class ErrorBoundary extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { error: null, info: null };

  componentDidCatch(error, info) {
    this.setState({ error, info });

    // Rethrow
    //throw error;
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: 'red' }}>
          <h1>{this.state.error.message}</h1>
          <pre>{this.state.error.stack}</pre>
          <h1>Info</h1>
          <pre>
            Component stack:
            {this.state.info.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
