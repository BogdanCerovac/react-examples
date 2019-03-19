/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function OnLine() {
  const [mousePosition, setMousePosition] = React.useState({
    X: undefined,
    Y: undefined
  });

  React.useEffect(() => {
    function handleMouseOver(e) {
      setMousePosition({ X: e.pageX, Y: e.pageY });
    }
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <h1>
      Mouse is at ({mousePosition.X}, {mousePosition.Y})
    </h1>
  );
}

export default OnLine;
