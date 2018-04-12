export class Component {
  constructor(selector) {
    this._selector = selector;
  }

  get selector() {
    return this._selector;
  }
}