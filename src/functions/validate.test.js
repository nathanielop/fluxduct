import { strict as assert } from 'assert';

import validate from './validate.js';

export default {
  'can validate a single expression': () => assert.ok(validate({ add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }] })),
  'can validate nested expressions':  () => assert.ok(validate({ add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }], multiply: [{ path: ['bash', 'git', 'idno'] }, { path: ['bar', 'baz'] }] })),
  'can properly detect invalid expressions':  () => assert.throws(validate({ add: [{ path: undefined }, { path: ['bar', 'baz'] }] })),
}
