export default (dictionary, expression) => {
  const [aKey, bKey] = findArguments(expression);
  if (!dictionary[aKey] && !dictionary[bKey]) {
    throw new Error(`No keys present in dictionary ${JSON.stringify(dictionary)} for variable keys ${aKey} or ${bKey} in OR conditional ${expression}.`);
  }
  return dictionary[aKey] ?? dictionary[bKey];
}