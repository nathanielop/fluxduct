import FluxductError from '../constants/fluxduct-error.js';

export default (dictionary, path) => {
  const throwError = type => {
    throw new FluxductError(type, { dictionary, path });
  }

  if (!path || !(path instanceof Array)) throwError('expectedArray');

  let resolvedValue = dictionary;
  for (const i in path) {
    const newObj = resolvedValue[path[i]];
    if (newObj == null) throwError('missingDictionaryValue');
    resolvedValue = resolvedValue[path[i]];
  }

  return resolvedValue;
}
