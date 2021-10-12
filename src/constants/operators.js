import evaluate from '../functions/evaluate.js';

export default { 
  add: (dictionary, [a, b]) => evaluate(dictionary, a) + evaluate(dictionary, b),
  subtract: (dictionary, [a, b]) => evaluate(dictionary, a) - evaluate(dictionary, b),
  multiply: (dictionary, [a, b]) => evaluate(dictionary, a) * evaluate(dictionary, b),
  divide: (dictionary, [a, b]) => evaluate(dictionary, a) / evaluate(dictionary, b),
  equal: (dictionary, [a, b]) => evaluate(dictionary, a) === evaluate(dictionary, b),
  power: (dictionary, [a, b]) => evaluate(dictionary, a) ^ evaluate(dictionary, b),
  if: (dictionary, [a, b, c]) => !!evaluate(dictionary, a) ? evaluate(dictionary, b) : evaluate(dictionary, c),
  concat: (dictionary, args) => args.reduce((res, arg) => res.concat(evaluate(dictionary, arg)), evaluate(dictionary, args[0]) instanceof Array ? [] : ''),
  or: (dictionary, args) => args.some(val => !!evaluate(dictionary, val)),
  and: (dictionary, args) => args.every(val => !!evaluate(dictionary, val)),
}
