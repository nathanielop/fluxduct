export default (dictionary, path) => {
  if (!path || !(path instanceof Array)) {
    throw new Error(`Expected array for path, received "${JSON.stringify(path)}".`);
  }
  let resolvedValue = dictionary;
  for (const i in path) {
    const newObj = resolvedValue[path[i]];
    if (!newObj) {
      throw new Error(`No value present in dictionary "${JSON.stringify(dictionary)}" for path "${path.slice(0, i).join('.')}".`);
    }
    resolvedValue = resolvedValue[path[i]];
  }
  return resolvedValue;
}
