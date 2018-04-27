import { Component } from "./Component";

export class ComponentClass {
  constructor(){
    // console.log(__dirname+'components');
    // console.log(ComponentClass);
    this.selector = ComponentClass.selector;
    this.html = ComponentClass.html;
    this.styles = ComponentClass.styles;
    // debugger
    // let test = require('./login.html');
    // console.log(this.html);
    // console.log(this.selector);

    this.setHTML();
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
    const el = document.createElement('style');
      el.innerHTML = this.styles;
    return el;
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

    const nodes = [...document.querySelectorAll(this.selector)];

    console.log(nodes[0]);
    
    nodes.forEach( node => {
      const parent = node.parentNode;
      const styleTag = this.setStyles();

      node.innerHTML = this.html 
      parent.insertBefore(styleTag,node);
    });
  }

}
