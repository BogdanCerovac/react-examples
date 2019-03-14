/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './background-context';
import ColorContext from './color-context';

class Three extends React.Component {
  render() {
    return (
      <BackgroundContext.Consumer>
        {backgroundContext => (
          <ColorContext.Consumer>
            {colorContext => (
              <h1
                style={{
                  background: backgroundContext.color,
                  color: colorContext.color
                }}
              >
                Three
              </h1>
            )}
          </ColorContext.Consumer>
        )}
      </BackgroundContext.Consumer>
    );
  }
}

export default Three;
