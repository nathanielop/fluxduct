import { strict as assert } from 'assert';

import subtract from './subtract.js';

export default {
  'can subtract two basic paths': () => assert.equal(subtract({ foo: 1, bar: 4 }, [{ path: ['foo'] }, { path: ['bar'] }]), -3)
}
