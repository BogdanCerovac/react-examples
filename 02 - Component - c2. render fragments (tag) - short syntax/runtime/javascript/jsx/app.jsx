/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        What do you think about React?
        <div>It looks amazing.</div>
      </>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);