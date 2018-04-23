/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

// Component with render prop
class MouseOver extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { mouseIsOver: false };
  onMouseEnter = () => {
    this.setState({ mouseIsOver: true });
  }
  onMouseLeave = () => {
    this.setState({ mouseIsOver: false });
  }
  
  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {/*
          Call the props.render function with what this component knows about the mouse
          (this.state can be removed if state contains more than 1 property):
        */}
        {this.props.render(this.state.mouseIsOver)}
      </div>
    );
  }
}

const Greeting = ({ name, highlight }) => (
  <h1 style={highlight ? { color: "red" } : null}>Hello {name}!</h1>
);

const App = () => (
  <React.Fragment>
    <MouseOver render={mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />} />
    <Greeting name="Second" />
    <MouseOver render={mouseIsOver => <h2>Subtitle{mouseIsOver && " (with mouse)"}</h2>} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("app"));
