import evaluate from './evaluate.js';

export default (dictionary, [a, b]) => evaluate(dictionary, a) - evaluate(dictionary, b);
