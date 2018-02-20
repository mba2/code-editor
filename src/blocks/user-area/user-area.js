import { controller } from "../../controller";

import "./user-area.scss";


export const v_user_area = {
	cacheElements : function() {
		this.userName = document.querySelector(".user-area__name");
	},

  setUserName : function() {
    this.userName.innerText = controller.getUserName();
  },

  changeUserName : function() {
    const SELF = this;
    let t = document.querySelector("#test");
      t.addEventListener("click", function() {
        controller.changeUserName("Heisenberg");
        SELF.render();
      })
  },
  
  render : function() {
    console.log("Rendering user area!");
    this.setUserName();
  },

  init : function() {
    this.cacheElements();
    this.changeUserName();
    this.render();
  }
};