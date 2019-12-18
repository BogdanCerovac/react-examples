/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Greeting from './Greeting';
import { withExtras } from './hoc';

const GreetingWithExtras = withExtras(Greeting);

export default GreetingWithExtras;
