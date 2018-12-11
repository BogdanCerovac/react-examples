/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { pressed: '' };
  handleKeyUp = e => {
    const key = e.key;
    this.setState(state => ({ pressed: state.pressed + key }));
  };

  render() {
    return (
      <React.Fragment>
        <input autoFocus onKeyUp={this.handleKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}
