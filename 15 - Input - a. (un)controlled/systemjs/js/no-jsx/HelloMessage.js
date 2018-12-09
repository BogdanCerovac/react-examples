/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        /* Not controlled by React */
        React.createElement('span', null, 'Not controlled by React:'),
        React.createElement('input', {
          onChange: this.onChange,
          defaultValue: this.state.name
        })
      ),

      React.createElement(
        'div',
        null,
        /* Controlled by React */
        React.createElement('span', null, 'Controlled by React:'),
        React.createElement('input', {
          onChange: this.onChange,
          value: this.state.name
        })
      )
    );
  }
}

export default HelloMessage;
