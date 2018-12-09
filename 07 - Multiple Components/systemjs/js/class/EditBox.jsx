/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

/* Inline function */

function EditBox({ onChange, value }) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

/* method */

/*
class EditBox extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <input autoFocus onChange={this.onChange} value={this.props.value} />
    );
  }
}
*/

export default EditBox;
