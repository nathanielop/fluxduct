export default class FluxductError extends Error {
  constructor(type, context) {
    super();
    Object.assign(this, { type, context });
  }
}
