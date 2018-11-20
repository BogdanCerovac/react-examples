/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

function EditBox({ onChange, value }) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.onChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
