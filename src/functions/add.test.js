import { strict as assert } from 'assert';

import add from './add.js';

export default {
  'can add two basic paths': () => assert.equal(add({ foo: 1, bar: 4 }, [{ path: ['foo'] }, { path: ['bar'] }]), 5)
}
