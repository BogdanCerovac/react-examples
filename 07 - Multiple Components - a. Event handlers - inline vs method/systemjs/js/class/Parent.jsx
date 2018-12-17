/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  handleRerenderClick = () => {
    // Force rerender
    this.forceUpdate();
  };
  handleChildClick = () => {
    alert('Method handler');
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleRerenderClick}>Rerender</button>
        </div>
        <ul>
          <li>
            <Child name="method" onClick={this.handleChildClick} />
          </li>
          <li>
            <Child name="inline" onClick={() => alert('Inline handler')} />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
