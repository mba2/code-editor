import "./header.scss";
import html from './header.html';

import { Store } from '../../store';
import { Controller } from '../../controller';
import { Util } from "../../Util/Util";

import { Editor } from "../editor/editor";


export const Header = {
  selector : 'app-header',

  setLatestPlays : function() {
    let wrapper = document.querySelector('.latest-plays');
    const latestsPlays = Store.user.pens.filter( (play, i) => i < 3);

    latestsPlays.forEach( (play) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
        
      a.textContent = play.name;
      a.classList.add('play-anchor');
      a.dataset.id = play.id;
      
      li.appendChild(a);
      wrapper.appendChild(li);
    })
  },

  getProps : function(){
    return (function() {      
      if (!Store.user) return false;
      
      return {
        userName  : Store.user.name,
        userPhoto  : Store.user.photo
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
    this.setLatestPlays();
  },

  // ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
  // THIS HANDLERS WILL BE SET ON THE init() METHOD
  handlers : [
    function onClickConfiguration() {
      document.querySelector('.config')
        .addEventListener('click', () => {
          console.log(Store.user);
        })
    },
    function onClickNewPlay() {
      document.querySelector('.new-play-btn')
        .addEventListener('click', () => {
          if( !Store.app.hasActivePlay) {
            Editor.insertEditor();
            Editor.init();
            Store.app.hasActivePlay = true;
          }
          else {
            console.warn('This active play needs to be discarted or saved');
          }
        })
    }
  ],

  init : function() {
    // RUN THE COMPONENT'S INITIAL RENDERIZATION 
    this.render();
    // RUN ALL COMPONENT`S HANDLERS
    this.handlers.forEach( handler => handler());


    // Util.userAuthentication('001')
    //     .then( (e) => {
    //       // RUN THE COMPONENT'S INITIAL RENDERIZATION 
    //       self.render();
    //       // RUN ALL COMPONENT`S HANDLERS
    //       this.handlers.forEach( handler => handler());
    //     });
    
    
        // this.cacheElements();
    // this.changeUserName();
  }
}