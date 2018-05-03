// import "./starter-component.scss";
// import html from './starter-component.html';

// import { Store } from '../../store';
// import { Util } from "../../Util/Util";

// export const StarterComponent = {
//   selector : 'starter-component',

//   getProps : function(){
//     return (function() {      
//       if (!Store.user) return false;
      
//       return {
//         property_1  : 'property_1',
//         property_2  : 'property_2'
//       }
//     })();
//   },

//   mountHTML : function() {
//     const template = this.setProps();

//     const nodes = [...document.querySelectorAll(this.selector)];
//     nodes.forEach( node => node.innerHTML = template );
//   },

//   setProps : function() {
//     const regex = /{{\s+(.*?)\s+}}/gmi;
//     const matches = html.match(regex);
//     const props = this.getProps();

//     let template = html;

//     matches.forEach( () => {
//       let result = regex.exec(html); 
//         if( result !== null && result.length > 1)
//           template = template.replace(result[0], props[result[1]]);
//     });

//     return template;
//   },

//   render : function() {
//     console.log('rendering header');
//     this.mountHTML();
//   },

//   // ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
//   // THIS HANDLERS WILL BE SET ON THE init() METHOD
//   handlers : [
//     function onClickTeste() {
//       document.querySelector('.teste')
//         .addEventListener('click', () => {
//           console.log('teste');
//         })
//     }
//   ],

//   init : function() {
//     const self = this;

//     // Util.promise
//     //   .then( (e) => {
//     //     // RUN THE COMPONENT'S INITIAL RENDERIZATION 
//     //     self.render();
//     //     // RUN ALL COMPONENT`S HANDLERS
//     //     this.handlers.forEach( handler => handler());
//     //   });

//     // this.cacheElements();
//     // this.changeUserName();
//   }
// }

import { Component } from "../../core/Component";
import { ComponentClass } from "../../core/ComponentClass";



export class StarterComponent extends ComponentClass {
  constructor(data) {
    super(data);
  }
}

Component({
  html: `
    <div>
      {{ property_1 }}
    </div>
    <div>
      {{ property_2 }}
    </div>
  `,
  styles : `
    div {
      color: red;
    }
  `,
  selector : 'starter-component',
  constructor: StarterComponent
});
