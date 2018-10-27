/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", no-console:"off" */

class Child extends React.Component {
  render() {
    console.log('Render Child');
    return <h2>Child</h2>;
  }
}

const ChildMemo = React.memo(Child /* no custom comparison (2nd parameter) */);

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Open the console and observe the number of Child renders when typing.
        </div>
        <div>
          <input onChange={this.nameChanged} value={this.state.name} />
        </div>
        <ChildMemo />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));