import "./header.scss";
import html from './header.html';

import { Store } from '../../store';
import { Util } from "../../Util/Util";

export const Header = {
  selector : 'app-header',

  getProps : function(){
    return (function() {
      return {
        userName  : Store.user[0].name,
        userPhoto  : Store.user[0].photo
      }
    })();
  },

  mountHTML : function() {
    const template = this.setProps();

    const nodes = [...document.querySelectorAll(this.selector)];
    nodes.forEach( node => node.innerHTML = template );
  },

  setProps : function() {
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
  },


  render : function() {
    console.log('rendering header');
    this.mountHTML();
    // this.setProps();
  },

  // ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
  // THIS HANDLERS WILL BE SET ON THE init() METHOD
  handlers : [],

  init : function() {
    const self = this;
    Util.userAuthentication('001').then( (e) => {
      console.log(Store);
    //   console.log(self);
      self.render();
    });
    // this.cacheElements();
    // this.changeUserName();
  }
}