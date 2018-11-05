/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World', other: 'More state' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        onChange: this.onChange,
        value: this.state.name
      }),
      React.createElement('h1', null, 'Hello ', this.state.name, '!'),
      React.createElement('h2', null, this.state.other)
    );
  }
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);
