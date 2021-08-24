import { strict as assert } from 'assert';

import evaluateIf from './if.js';

export default {
  'can evaluate a basic if': () => assert.equal(evaluateIf({ foo: 1, bar: 4, baz: true }, [{ path: ['baz'] }, { path: ['foo'] }, { path: ['bar'] }]), 1)
}
