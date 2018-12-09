/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' //margin-top in CSS
  }
};

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', { style: styles.header }, 'Hello World!');
  }
}

export default Greeting;
