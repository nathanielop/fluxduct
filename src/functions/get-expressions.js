import operators from '../constants/operators.js';

const getInstancesOfOperator = (op, str = '') => {
  if (str.length === 0) return [];
  let startIndex = 0, index, indices = [];
  while ((index = str.indexOf(op, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + op.length;
  }
  return indices;
}

export default str => [...operators].reduce((obj, operator) => Object.assign(obj, { operator: getInstancesOfOperator(operator, str) }), {});
