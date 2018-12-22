/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import React from 'react';

import Hello from './Hello';
import { logEvent } from 'utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'A' };
  }
  componentDidMount() {
    setTimeout(() => {
      logEvent('-- new prop --', 'action');
      this.setState({ name: 'B' });
    }, 100);
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}

export default App;
