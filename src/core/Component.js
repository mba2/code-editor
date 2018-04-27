import { ComponentClass } from "./ComponentClass";

export const Component = (data) => {
  return (function() {
    ComponentClass['selector'] = data['selector'];
    ComponentClass['html'] = data['html'];
    ComponentClass['styles'] = data['styles'];
    // Object.keys(object).forEach( prop => {
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

