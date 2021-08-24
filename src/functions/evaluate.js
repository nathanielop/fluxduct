import operatorFunctions from '../constants/operator-functions.js';
import operators from '../constants/operators.js';
import conditionalFunctions from '../constants/conditional-functions.js';
import conditionals from '../constants/conditionals.js';
import findArguments from './find-arguments.js';

export default (dictionary, expression) => {
  expression = expression.trim();
  const operator = expression.slice(0, expression.indexOf(' '));
  const conditional = [...conditionals].find(conditional => expression.startsWith(conditional));
  if (conditional) {
    return conditionalFunctions[conditional](dictionary, expression);
  }
  if (!operators.has(operator)) {
    throw new Error(`Invalid operator provided in expression "${expression}", expected one of ${[...operators].join(', ')}.`);
  }
  const [aKey, bKey] = findArguments(expression);
  [aKey, bKey].map(key => {
    if (!dictionary[key]) {
      throw new Error(`No key present in dictionary ${JSON.stringify(dictionary)} for variable key "${key}".`);
    }
  });
  return operatorFunctions[operator](dictionary[aKey], dictionary[bKey]);
}
