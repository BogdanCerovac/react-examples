/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return [
      React.createElement('h1', { key: 'heading' }, 'Hello World!'),
      'What do you think about React?',
      React.createElement('div', { key: 'enthusiasm' }, 'It looks amazing.')
    ];
  }
}

export default Greeting;
