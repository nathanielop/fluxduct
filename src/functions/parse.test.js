import { strict as assert } from 'assert';

import parse from './parse.js';

export default {
  'can parse a single expression': () => assert.equal(parse({ foo: 5, bar: { baz: 5 } }, { add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }] }), 10),
  'can parse multiple expressions':  () => assert.equal(parse({ foo: 5, bar: { baz: 5 }, bash: { git: { idno: 10 } } }, { add: [{ path: ['foo'] }, { path: ['bar', 'baz'] }], multiply: [{ path: ['bash', 'git', 'idno'] }, { path: ['bar', 'baz'] }] }), [10, 50]),
}
