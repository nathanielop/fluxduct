export default (dictionary, path) => {
  if (!(path instanceof Array)) {
    throw new Error(`Expected array for path, received "${path}".`);
  }
  let resolvedValue = dictionary;
  for (i of path) {
    const newObj = resolvedValue[path[i]];
    if (!newObj) {
      throw new Error(`No value present in dictionary "${JSON.stringify(dictionary)}" for path "${JSON.stringify(path.slice(0, i))}".`);
    }
    resolvedValue = resolvedValue[part[i]];
  }
  if (typeof resolvedValue !== 'number') {
    throw new Error(`Expected number value at path "${JSON.stringify(path.slice(0, i))}" in dictionary "${JSON.stringify(dictionary)}", received "${typeof resolvedValue}".`);
  }
  return resolvedValue;
}
