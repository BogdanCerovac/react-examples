/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = () => (
  <h1
    style={{
      transform: 'rotate(10deg) translateY(100px)',
      msTransform: 'rotate(10deg) translateY(100px)',
      WebkitTransform: 'rotate(10deg) translateY(100px)'
    }}
  >
    Hello World!
  </h1>
);

ReactDOM.render(<Greeting />, document.getElementById('app'));
