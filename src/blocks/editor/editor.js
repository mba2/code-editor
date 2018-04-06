import "./editor.scss";
import { Store } from "../../store";

export const v_editor = {
  currentTheme : "solarized_light",

  cacheElements : function() {
    this.boxes = [].slice.call(document.querySelectorAll(".editor__box"));
    this.dom_saveBtn = document.querySelector("#save");
	},
  
  getBoxesMeasures : function() {
    let boxes = document.querySelectorAll(".editor-box") || null;
      if(boxes) {
        boxes.forEach( box => {
          console.log(window.getComputedStyle(box).width);
        });
      }
  },

  createBoxes : function() {
    const self = this;

    this.boxes.forEach( function(box) {
      let boxType = box.getAttribute('id'),
        editor = null;
        try{
          boxType = boxType.split('--')[1];
          editor = ace.edit("editor--" + boxType);
          editor.setTheme("ace/theme/" + self.currentTheme);
          editor.session.setMode("ace/mode/" + boxType);
        } catch(e) { console.warn(e) }; 
    });
  },

  render : function() {
    console.log("Rendering editor area!");
  },

  /**
    * ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
    * THIS HANDLERS WILL BE SET ON THE init() METHOD
  */ 
  handlers : [
    function() {
      this.dom_saveBtn.addEventListener('click', function() {
        store.savePen({
          "id" : Store.user.lastPenId++,
          "name" : "New Pen",
          "type" : "sass",
          "content" : "$variable: value;"
        });
      });
    }
  ],

  init : function() {
    this.cacheElements();
    // this.changeUserName();
    // this.render();

    this.handlers.forEach((handler) => handler.call(this));
  }
}

