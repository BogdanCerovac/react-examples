/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
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
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);
