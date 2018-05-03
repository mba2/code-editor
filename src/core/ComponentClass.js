import { Component } from "./Component";
import { Controller } from "../controller";

export class ComponentClass {
  constructor(data){
    this.selector = data.selector;
    this.html = data.html;
    this.styles = data.styles;
    this.nodes = this.getTags();
    this.props = {};

    this.setProps();
    this.setStyles();
    this.setHTML();
  }

  // get Props() {
  //   // console.log(this);
  // }

  setProps() {
    let template = this.html;
    const regex = /{{\s+(.*?)\s+}}/gmi;
    const matches = template.match(regex);

    if(!matches) return false;

    const props = this.props;
    // console.log
    // debugger
    matches.forEach( () => {
      let result = regex.exec(this.html); 
        if( result !== null && result.length > 1)
          template = template.replace(result[0], props[result[1]]);
    });
    this.html = template;
    return template;
  } 

  getTags() {
    // SELECT THE CUSTOM HTML TAGS
    const nodes = [...document.querySelectorAll(this.selector)];
    if(!nodes.length) {
      console.warn("No HTML tag for this component:", this.selector);
      return [];
    }
    return nodes;
  }
   
  setStyles() {
    if(this.nodes.length) {
      let styleTag = document.createElement('style');
          styleTag.innerHTML = this.styles;
  
      document.body.appendChild(styleTag);
    }
  }

  setHTML() {
    this.nodes.forEach( node => node.innerHTML = this.html);
  }

  render() {

  }
}
