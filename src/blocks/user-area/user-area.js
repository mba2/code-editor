import { controller } from "../../controller";

import "./user-area.scss";


export const v_user_area = {
	cacheElements : function() {
		this.userName = document.querySelector(".user-area__name");
	},


  render : function() {
    console.log("Rendering user area!");

  },

  /**
    * ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
    * THIS HANDLERS WILL BE SET ON THE init() METHOD
  */ 
  handlers : [
    // function(SELF) {
    //   SELF.dom_loadBtn.addEventListener('click', function() {
    //     controller.userPlays.call(SELF,'001');
    //   });
    // }
  ],

  init : function() {
    // this.cacheElements();
    // this.changeUserName();
    // this.render();
  }
};