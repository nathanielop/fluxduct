import { strict as assert } from 'assert';

import evaluate from './evaluate.js';

export default {
  'can evaluate': () => assert.equal(evaluate({ foo: 5, bar: { baz: 5 } }, { add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }] }), 10),
  'can evaluate nested operations': () => assert.equal(evaluate({ foo: 5, bar: { baz: 5 } }, { add: [{ path: ['foo'] }, { add: [{ path: ['bar', 'baz'] }, { path: ['foo'] }] }] }), 15),
  'can evaluate nested conditions': () => assert.equal(evaluate({ foo: 5, bar: { baz: 5 }, test: 15, bool: false }, { add: [{ path: ['foo'] }, { if: [{ path: ['bool'] }, { path: ['bar', 'baz'] }, { path: ['test'] }] }] }), 20),
}
