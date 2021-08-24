import trueValues from '../constants/true-values.js';
import evaluate from './evaluate.js';

export default (dictionary, args) => {
  const [a, b, c] = args.map(arg => evaluate(dictionary, arg));
  return a && trueValues.has(a) ? b : c;
}