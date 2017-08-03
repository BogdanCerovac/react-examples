/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const EditBox = ({onChange, name}) => (
  <input onChange={e => onChange(e.target.value)} value={name} />
);

const Greeting = ({name}) => (
  <h1>Hello {name}!</h1>
);

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(newName) {
    this.setState(() => ({ name: newName }));
  }
  render() {
    return (
      <div>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <GreetingEditor />,
  document.getElementById('app')
);
