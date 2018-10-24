/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

// Component with render prop
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsOver: false };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    this.setState({ mouseIsOver: true });
  }
  onMouseLeave() {
    this.setState({ mouseIsOver: false });
  }
  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {/*
          Call the props.render function with what this component knows about the mouse
          (this.state can be removed if state contains more than 1 property):
        */}
        {this.props.children(this.state.mouseIsOver)}
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <h1 style={this.props.highlight ? { color: 'red' } : null}>
        Hello {this.props.name}!
      </h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MouseOver>
          {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
        </MouseOver>
        <Greeting name="Second" />
        <MouseOver>
          {mouseIsOver => (
            <h2>
              Subtitle
              {mouseIsOver && ' (with mouse)'}
            </h2>
          )}
        </MouseOver>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
