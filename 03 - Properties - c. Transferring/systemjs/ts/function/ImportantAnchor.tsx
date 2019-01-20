/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ImportantAnchor(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, ...otherProps } = props;
  return <a {...otherProps}>!!! {children} !!!</a>;
}

export default ImportantAnchor;
