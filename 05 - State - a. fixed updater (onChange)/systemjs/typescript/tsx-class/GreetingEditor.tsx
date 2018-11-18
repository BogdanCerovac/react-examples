/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingEditorState {
  name: string;
}

class GreetingEditor extends React.Component<unknown, IGreetingEditorState> {
  constructor(props: unknown) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ name: e.currentTarget.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.onChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
