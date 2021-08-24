import evaluate from './evaluate.js';

export default (dictionary, [a, ...args]) => {
  const a = evaluate(dictionary, a, 'boolean');
  const [b, c] = args.map(arg => evaluate(dictionary, arg));
  return a ? b : c;
}