/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import ClickMe from './ClickMe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Click me!</button>
        <br />
        {Boolean(this.state.count % 2) && <ClickMe />}
      </React.Fragment>
    );
  }
}

export default App;
