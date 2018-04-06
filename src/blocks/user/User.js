import { controller } from "../../controller";
import { Util } from '../../Util/Util';
import { Store } from '../../store';

import "./user.scss";


export const User = {
	cacheElements : function() {
		this.userName = document.querySelector(".user-area__name");
	},

    
  loginRedirect() {
    const userIsLogged = store.app.userIsLogged;

    if( userIsLogged ) {
      document.querySelector('.login-comp')
        .classList.remove('unknow-user');
        return;
    }    
  },

  render : function() {
    console.log("Rendering user!");

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