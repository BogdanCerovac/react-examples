/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Greeting = ({name}) => (
  <i>Hello {name}</i>
);

const List = ({children}) => (
  <ul>{
    children.map(function (child, i) {
      return <li key={i}>{child}</li>
    })
  }</ul>
);

ReactDOM.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>,
  document.getElementById('app')
);