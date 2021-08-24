export default (dictionary, path) => {
  if (!path || !(path instanceof Array)) {
    throw new Error(`Expected array for path, received "${JSON.stringify(path)}".`);
  }
  let resolvedValue = dictionary;
  for (part of path) {
    const newObj = resolvedValue[part];
    if (!newObj) {
      throw new Error(`No value present in dictionary "${JSON.stringify(dictionary)}" for path "${JSON.stringify(path)}".`);
    }
    resolvedValue = resolvedValue[part];
  }
  if (typeof resolvedValue !== 'number') {
    throw new Error(`Expected number value at path "${JSON.stringify(path.slice(0, i))}" in dictionary "${JSON.stringify(dictionary)}", received "${typeof resolvedValue}".`);
  }
  return resolvedValue;
}
