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
    this.userName = document.querySelector(".user-area__name");
    console.log("caching elements - v_user_area!");
  },
  
  getUserPersonalInfo : function() {
    let test = controller.getUserPersonalInfo(2445);
    console.log(test);
  },

  render : function() {
    console.log("Rendering - v_user_area!");
  },
  
  init : function() {
    this.cacheElements();
    this.getUserPersonalInfo();
    this.render();
  }
};


