/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return React.createElement(
      'i',
      null,
      this.props.greeting,
      ' ',
      this.props.name,
      '!'
    );
  }
}
