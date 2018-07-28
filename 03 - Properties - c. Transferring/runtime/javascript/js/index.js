/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class ImportantAnchor extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return React.createElement('a', props, '!!! ', children, ' !!!');
  }
}

ReactDOM.render(
  React.createElement(
    ImportantAnchor,
    {
      href: 'http://www.reactjs.com',
      rel: 'noopener',
      target: '_blank',
      title: 'Everything about React'
    },
    'React website'
  ),
  document.getElementById('app')
);
