import { Component } from "./Component";
import { Controller } from "../controller";

export class ComponentClass {
  constructor(){
    this.selector = ComponentClass.selector;
    this.html = ComponentClass.html;
    this.styles = ComponentClass.styles;
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
    let styleTag = document.createElement('style');
        styleTag.innerHTML = this.styles;

    document.body.appendChild(styleTag);
  }

  setHTML() {
    // console.log('monting html');
    // console.log(this._html);

    // import(`${this._html}`)
    //   .then(e => console.log(e));

    // // console.log(Component);
    // // import("../components/login/login.html").then(e => console.log(e));
    // // import("./ComponentClass").then(e => console.log(e));

    // // console.log('s');
    
    // const template = this.setProps();

    // SELECT THE CUSTOM HTML TAGS
    const nodes = [...document.querySelectorAll(this.selector)];
      if(!nodes.length) {
        console.warn("No selected elements!");
        return false;
      }
    // INSERT THEIR HTML CONTENT
    nodes.forEach( node => node.innerHTML = this.html);
    // // INSERT THE STYLES FOR THEM
    // this.setStyles.call(this,nodes);
  }
}
