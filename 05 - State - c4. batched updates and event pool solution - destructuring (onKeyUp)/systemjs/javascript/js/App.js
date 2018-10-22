/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp({ key }) {
    this.setState(state => ({ pressed: state.pressed + key }));
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        onKeyUp: this.onKeyUp
      }),
      React.createElement('div', null, 'Pressed: ', this.state.pressed)
    );
  }
}
