import operators from '../constants/operators.js';
import FluxductError from '../constants/fluxduct-error.js';

export default (dictionary = {}, obj) => {
  const throwError = type => {
    throw new FluxductError(type, { dictionary, obj });
  }

  if (!(obj instanceof Object)) throwError('expectedObject');
  if (!Object.keys(obj).length) return null;

  const evaluatedExpressions = Object.entries(obj).reduce((arr, [operator, args]) => (!args.length) ? arr : arr.concat(operators[operator](dictionary, args)), []);

  if (!evaluatedExpressions.length) return null;

  return evaluatedExpressions.length === 1 ? evaluatedExpressions[0] : evaluatedExpressions;
}
