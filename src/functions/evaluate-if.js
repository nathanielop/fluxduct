import trueValues from '../constants/true-values.js';

export default (dictionary, expression) => {
  const [aKey, bKey, cKey] = findArguments(expression);
  const keyToUse = dictionary[aKey] && trueValues.has(dictionary[aKey]) ? bKey : cKey;
  if (!dictionary[keyToUse]) {
    throw new Error(`No key present in dictionary "${JSON.stringify(dictionary)}" for variable key "${keyToUse}" in IF conditional "${expression}".`);
  }
  return dictionary[keyToUse];
}