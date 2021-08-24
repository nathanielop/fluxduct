import { strict as assert } from 'assert';

import evaluatePath from './evaluate-path.js';

export default {
  'can evaluate a basic path': () => assert.equal(evaluatePath({ foo: 5 }, ['foo']), 5)
}
