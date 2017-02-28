/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = React.createClass({
  render: function () {
    return (
      <h1 style={styles.header}>Hello World!</h1>
    );
  }
});

var styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic',  // font-style in CSS
    marginTop: '75px',  //margin-top in CSS
  }
};

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);
