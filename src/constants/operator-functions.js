import add from '../functions/add.js';
import subtract from '../functions/subtract.js';
import multiply from '../functions/multiply.js';
import divide from '../functions/divide.js';

export default { 
  add: (dictionary, args) => add(dictionary, args),
  subtract: (dictionary, args) => subtract(dictionary, args),
  multiply: (dictionary, args) => multiply(dictionary, args),
  divide: (dictionary, args) => divide(dictionary, args),
}
