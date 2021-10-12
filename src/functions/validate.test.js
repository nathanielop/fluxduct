import { strict as assert } from 'assert';

import validate from './validate.js';

export default {
  'can validate a single expression': () => assert.doesNotThrow(() => validate({ add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }] })),
  'can validate nested expressions':  () => assert.doesNotThrow(() => validate({ add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }], multiply: [{ path: ['bash', 'git', 'idno'] }, { path: ['bar', 'baz'] }] })),
}
