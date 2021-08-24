import getExpressions from './get-expressions.js';
import evaluate from './evaluate.js';

export default ({ dictionary = {}, str = '' }) => {
  if (!(str instanceof String)) {
    throw new Error(`The second argument provided "${JSON.stringify(str)}", is not a string.`);
  }

  const expressionsDict = getExpressions(str);
  const collapsedOperatorIndexes = Object.values(expressionsDict).flatMap(arr => arr);
  const evaluatedExpressions = Object.entries(expressionsDict).reduce((arr, [operator, instances]) => {
    if (!instances.length) return arr;
    arr.concat(...instances.map(startIndex => {
      const index = collapsedOperatorIndexes.indexOf(startIndex);
      const next = collapsedOperatorIndexes[index + 1];
      return evaluate(next ? str.slice(index, next) : str.slice(index));
    }))
  }, []);

  if (!evaluatedExpressions.length) return null;

  return evaluatedExpressions.length === 1 ? evaluatedExpressions[0] : evaluatedExpressions;
}
