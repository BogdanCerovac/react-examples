/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
};