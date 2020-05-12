/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Greeting:</h3>
        <div>
          {
            // Change render based on name:
            this.props.name ? (
              <React.Fragment>
                <u>Hello</u> {this.props.name}!
              </React.Fragment>
            ) : (
              <span style={{ color: 'red' }}>No name provided.</span>
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Greeting;
