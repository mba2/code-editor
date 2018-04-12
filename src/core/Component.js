export class Component {
  constructor(Store){

    this._store = Store;
  }

  get selector() {
    return this._selector;
  }

  set selector(selectorString) {
    this._selector = selectorString;
  }

  get store() {
    return this._store;
  }
}