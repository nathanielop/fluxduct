import operators from '../constants/operators.js';
import FluxductError from '../constants/fluxduct-error.js';

const validate = obj => {
  const operator = Object.keys(obj).find(key => operators[key]);
  if (operator) {
    for (const arg of obj[operator]) validate(arg);
    return;
  }

  if (obj.value && obj.value != undefined) return;
  if (!obj.path) throw new FluxductError('missingPathKey', { obj });
}

export default validate;
