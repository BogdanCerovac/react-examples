/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  onChange: function (e) {
    alert('Event handled.\nTarget: ' + e.target + '\nValue: ' + e.target.value);
  },
  render: function () {
    return <input onChange={this.onChange} value='Hello World!' />;
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);