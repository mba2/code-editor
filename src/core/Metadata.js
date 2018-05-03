let _components = [];

export class Metadata {
  constructor() {}

  static addComponentInfo(obj) {
    _components = _components.concat(obj);
    
    
    // _components = _components.reduce( (acc,component,i,arr) => {
    //   console.log(component);
    //   return acc;
    // },_components);
    
    // {
    //   "constructor" : obj['constructor'],
    //   "selector" : obj['styles'],
    //   "html" : obj['html'],
    //   "styles" : obj['styles']
    // };
  }

  static get components() {
    return _components;
  }
}