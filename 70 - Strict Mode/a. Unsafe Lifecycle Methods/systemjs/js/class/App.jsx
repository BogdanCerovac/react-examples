/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import React from 'react';

import Hello from './Hello';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'One' };
  }
  componentDidMount() {
    this.setState({ name: 'Two' });
  }
  render() {
    return (
      <React.StrictMode>
        <Hello name={this.state.name} />
      </React.StrictMode>
    );
  }
}

export default App;
