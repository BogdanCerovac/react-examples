/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

class Three extends React.PureComponent {
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
Three.contextTypes = {
  color: PropTypes.string
}

class Two extends React.PureComponent {
  render() {
    return <Three />;
  }
}

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.onSwitch = this.onSwitch.bind(this);
  }
  getChildContext() {
    return { color: this.state.color };
  }
  onSwitch() {
    this.setState(prevState => ({ color: prevState.color === 'red' ? 'green' : 'red' }));
  }
  render() {
    return (
      <React.Fragment>
        <Two />
        <button onClick={this.onSwitch}>Switch color</button>
      </React.Fragment>
    );
  }
}
One.childContextTypes = {
  color: PropTypes.string
};

ReactDOM.render(
  <One color="red" />,
  document.getElementById('app')
);
