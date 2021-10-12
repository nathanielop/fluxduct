import operators from '../constants/operators.js';
import FluxductError from '../constants/fluxduct-error.js';
import conditionals from '../constants/conditionals.js';

export default obj => {
  const conditional = Object.keys(obj).find(key => conditionals.has(key));
  if (conditional) return validateFunctions[conditional](obj[conditional]);

  const operator = Object.keys(obj).find(key => operators.has(key));
  if (operator) return validateFunctions[operator](obj[operator]);

  if (obj.value && typeof obj.value === 'number') return;

  if (!obj.path) {
    throw new FluxductError('missingPathKey', { obj });
  }
}
