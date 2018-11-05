/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { unstable_createResource as createResource } from 'react-cache';

const AsyncResource = createResource(
  id =>
    new Promise(resolve => {
      setTimeout(() => resolve(`Result ${id}!`), 3000);
    })
);

export default AsyncResource;
