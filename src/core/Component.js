import { ComponentClass } from "./ComponentClass";
import { Metadata } from "./Metadata";


export const Component = (data) => {
  return (function() {
    console.log(Metadata.components);
    Metadata.addComponentInfo(data);

    console.log(Metadata.components);
    
    
    // Metadata.addComponentInfo({
    //   "name" : data["selector"],
    //   "props" : {
    //     "html" : data["html"],
    //     "styles" : data["styles"],
    //   }
    // });
    
    // Object.keys(object).forEach( prop => {
      // console.log(ComponentClass.setHTML);
      // ComponentClass[prop] = require(__dirname+'\\components\\login\\login.html');
      // console.log(path.resolve('ae'));
      // console.log(__dirname+'components/login/login.html');
      // ComponentClass[prop] = require(__dirname+'\\components\\login\\login.html');
      // ComponentClass[prop] = require('../components/login/login.html');
      // ComponentClass[prop] = require(object[prop]);
    // });
    // return ("import ae from './login.html'");
  })();
}

