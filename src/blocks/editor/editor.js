// import "./editor.scss";
// import { Store } from "../../store";

// export const v_editor = {
//   currentTheme : "solarized_light",

//   cacheElements : function() {
//     this.boxes = [].slice.call(document.querySelectorAll(".editor__box"));
//     this.dom_saveBtn = document.querySelector("#save");
// 	},
  
//   getBoxesMeasures : function() {
//     let boxes = document.querySelectorAll(".editor-box") || null;
//       if(boxes) {
//         boxes.forEach( box => {
//           console.log(window.getComputedStyle(box).width);
//         });
//       }
//   },

//   createBoxes : function() {
//     const self = this;

//     this.boxes.forEach( function(box) {
//       let boxType = box.getAttribute('id'),
//         editor = null;
//         try{
//           boxType = boxType.split('--')[1];
//           editor = ace.edit("editor--" + boxType);
//           editor.setTheme("ace/theme/" + self.currentTheme);
//           editor.session.setMode("ace/mode/" + boxType);
//         } catch(e) { console.warn(e) }; 
//     });
//   },

//   render : function() {
//     console.log("Rendering editor area!");
//   },

//   /**
//     * ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
//     * THIS HANDLERS WILL BE SET ON THE init() METHOD
//   */ 
//   handlers : [
//     function() {
//       this.dom_saveBtn.addEventListener('click', function() {
//         store.savePen({
//           "id" : Store.user.lastPenId++,
//           "name" : "New Pen",
//           "type" : "sass",
//           "content" : "$variable: value;"
//         });
//       });
//     }
//   ],

//   init : function() {
//     this.cacheElements();
//     // this.changeUserName();
//     // this.render();

//     // this.handlers.forEach((handler) => handler.call(this));
//   }
// }


import "./editor.scss";
import html from './editor.html';

import { Store } from '../../store';
import { Util } from "../../Util/Util";

export const Editor = {
  selector : 'editor',

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
        property_1  : 'property_1',
        property_2  : 'property_2'
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

    if (matches) {
      matches.forEach( () => {
        let result = regex.exec(html); 
          if( result !== null && result.length > 1)
            template = template.replace(result[0], props[result[1]]);
      });
    }

    return template;
  },

  render : function() {
    console.log('rendering editor');
    this.mountHTML();
    this.setLatestPlays();
  },

  // ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
  // THIS HANDLERS WILL BE SET ON THE init() METHOD
  handlers : [
    function onClickTeste() {
      document.querySelector('.latest-plays')
        .addEventListener('click', () => {
          console.log('teste');
        })
    }
  ],

  init : function() {
    // RUN THE COMPONENT'S INITIAL RENDERIZATION 
    this.render();
    // RUN ALL COMPONENT`S HANDLERS
    this.handlers.forEach( handler => handler());

    // Util.promise
    //   .then( (e) => {
    //     // RUN THE COMPONENT'S INITIAL RENDERIZATION 
    //     self.render();
    //     // RUN ALL COMPONENT`S HANDLERS
    //     this.handlers.forEach( handler => handler());
    //   });
    
    // this.cacheElements();
    // this.changeUserName();
  }
}