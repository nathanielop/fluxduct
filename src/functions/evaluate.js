import operatorFunctions from '../constants/operator-functions.js';
import operators from '../constants/operators.js';
import conditionalFunctions from '../constants/conditional-functions.js';
import conditionals from '../constants/conditionals.js';
import evaluatePath from './evaluate-path.js';

export default (dictionary, obj) => {
  const conditional = Object.keys(obj).find(key => conditionals.has(key));
  if (conditional) return conditionalFunctions[conditional](dictionary, obj[conditional]);

  const operator = Object.keys(obj).find(key => operators.has(key));
  if (operator) return operatorFunctions[operator](dictionary, obj[operator]);

  if (!obj.path) {
    throw new Error(`No path key present in argument "${JSON.stringify(obj)}".`);
  }

  const value = evaluatePath(dictionary, obj.path);

  if (!value) {
    throw new Error(`No value present in dictionary "${JSON.stringify(dictionary)}" for path "${JSON.stringify(obj.path)}".`);
  }

  return value;
}
