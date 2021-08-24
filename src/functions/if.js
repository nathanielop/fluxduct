import trueValues from '../constants/true-values.js';
import evaluate from './evaluate.js';
import evaluatePath from './evaluate-path.js';

export default (dictionary, [{ path }, ...args]) => {
  const a = evaluatePath(dictionary, path);
  const [b, c] = args.map(arg => evaluate(dictionary, arg));
  return a && trueValues.has(a) ? b : c;
}
