import { strict as assert } from 'assert';

import multiply from './multiply.js';

export default {
  'can multiply two basic paths': () => assert.equal(multiply({ foo: 1, bar: 4 }, [{ path: ['foo'] }, { path: ['bar'] }]), 4)
}
