import { strict as assert } from 'assert';

import divide from './divide.js';

export default {
  'can divide two basic paths': () => assert.equal(divide({ foo: 4, bar: 4 }, [{ path: ['foo'] }, { path: ['bar'] }]), 1)
}
