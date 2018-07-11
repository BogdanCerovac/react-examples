/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global Babel, React, ReactDOM */
/* eslint react/prop-types:"off" */

function jsxTransform(source) {
  return Babel.transform(source, { presets: ['react'] }).code;
}

class JsxCompiler extends React.Component {
  constructor(props) {
    super(props);
  
    this.jsx = `class HelloMessageClass extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;

    this.state = { code: jsxTransform(this.jsx) };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ code: jsxTransform(e.target.value) });
  }
  render() {
    return (
      <div style={styles.div}>
        <textarea onChange={this.onChange} defaultValue={this.jsx} />
        <textarea readOnly="readOnly" value={this.state.code} />
      </div>);
  }
}

var styles = {
  div: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '45vh',
    gridGap: '0.5vw'
  }
};

ReactDOM.render(
  <JsxCompiler />,
  document.getElementById('app')
);
