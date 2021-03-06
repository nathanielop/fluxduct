import operators from '../constants/operators.js';
import FluxductError from '../constants/fluxduct-error.js';
import evaluatePath from './evaluate-path.js';

export default (dictionary, obj) => {
  const throwError = type => {
    throw new FluxductError(type, { dictionary, obj });
  }

  const operator = Object.keys(obj).find(key => operators[key]);

  if (operator) return operators[operator](dictionary, obj[operator]);
  if (obj.value && typeof obj.value === 'number') return obj.value;
  if (!obj.path) throwError('missingPathKey');

  const value = evaluatePath(dictionary, obj.path);
  if (value == null) throwError('missingDictionaryValue');

  return value;
}
