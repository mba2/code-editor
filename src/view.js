import { controller } from "./controller";

// VIEWS
export const v_auth_box = {
	cacheElements : function() {
		this.authBox = document.querySelector(".auth-box");
		this.authBoxCloseBtn = document.querySelector(".auth-box .btn--close");
    },

    render : function() {
    },
    
    init : function() {
      this.render();
    }
};

export const v_user_area = {
	cacheElements : function() {
		this.userName = document.querySelector(".user-area__name");
  },

  setUserName : function() {
    this.userName.innerText = controller.getUserName();
  },

  changeUserName : function() {
    const self = this;
    let t = document.querySelector("#test");
      t.addEventListener("click", function() {
        controller.changeUserName("Heisenberg");
        self.render();
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