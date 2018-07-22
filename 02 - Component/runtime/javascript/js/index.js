/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
