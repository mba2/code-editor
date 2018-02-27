/**
 * IMPORT THIS MODULE'S STYLES
*/
import "./v_user-area.scss";
/**
 * IMPORT THE CONTROLLER
*/
import { controller } from "../../controller";

export const v_user_area = {

	cacheElements : function() {
    this.dom_userName = document.querySelector(".user-area__name");
    this.dom_userPhoto = document.querySelector(".user-area__photo");
    this.dom_updateBtn = document.querySelector("#update");
  },
  
  setUserInfo : function(state) {
    this.dom_userName.innerHTML = state.name;
    this.dom_userPhoto.innerHTML = state.photo;
  },

  /**
    * ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
    * THIS HANDLERS WILL BE SET ON THE init() METHOD
  */ 
  handlers : [
    function click_changeUserName(SELF) {
      SELF.dom_updateBtn.addEventListener('click', () => {
        controller.userPersonalInfo.call(SELF,'001');
      });
    }
  ],

  /**
    * ALL METHODS OF THIS VIEW THAT MUST BE EXECUTED ON THE INITIALIZATION
  */ 
  init : function() {
    this.cacheElements();
    // this.getUserPersonalInfo('001');

    /**
     *  SET ALL VIEW`S EVENT HANDLERS
    */
    this.handlers.forEach(handler => handler(this));
  }
};


