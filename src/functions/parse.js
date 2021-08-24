import operatorFunctions from '../constants/operator-functions.js';

export default ({ dictionary = {}, obj }) => {
  if (!(obj instanceof Object)) {
    throw new Error(`The second argument provided "${JSON.stringify(obj)}", is not an object.`);
  }
  if (!Object.keys(obj).length) return null;

  const evaluatedExpressions = Object.entries(obj).reduce((arr, [operator, args]) => {
    if (!args.length) return arr;
    arr.concat(operatorFunctions[operator](dictionary, args))
  }, []);

  if (!evaluatedExpressions.length) return null;

  return evaluatedExpressions.length === 1 ? evaluatedExpressions[0] : evaluatedExpressions;
}
