import { strict as assert } from 'assert';

import evaluate from './evaluate.js';

export default {
  'can evaluate': () => assert.equal(evaluate({ foo: 5, bar: { baz: 5 } }, { add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }] }), 10)
}
