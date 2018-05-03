import { Component } from "./Component";
import { Controller } from "../controller";

export class ComponentClass {
  constructor(data){
    this.selector = data.selector;
    this.html = data.html;
    this.styles = data.styles;
    this.nodes = this.getTags();

    this.setHTML();
    this.setStyles();
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
 
  setProps(htmlPath) {
    const regex = /{{\s+(.*?)\s+}}/gmi;
    const matches = html.match(regex);
    const props = this.getProps();

    let template = html;

    matches.forEach( () => {
      let result = regex.exec(html); 
        if( result !== null && result.length > 1)
          template = template.replace(result[0], props[result[1]]);
    });

    return template;
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
}
