/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import ColorContext from './color-context';
import Two from './Two';

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <ColorContext.Provider value={{ color: this.state.color }}>
        <Two />
        <button onClick={this.handleSwitch}>Switch color</button>
      </ColorContext.Provider>
    );
  }
}

export default One;
