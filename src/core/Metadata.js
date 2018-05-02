let _components = {};

export class Metadata {
  constructor() {

  }

  static addComponentInfo(obj) {
    console.log('I`m the danger!', obj);
    _components[obj['selector']] = {
      "html" : obj['html'],
      "styles" : obj['styles']
    };
  }

  // static get components() {
  //   return Metadata._components || [1];
  // }

  // static set components(newVal) {
  //   return Metadata._components.push(newVal);
  // }

  static get components() {
    return _components;
  }



  // set components(componentInfo) {
  //   this._components = this._components.concat(componentInfo);
  // }
}