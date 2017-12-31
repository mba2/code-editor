// MODEL
import model from "./model";

// CONTROLLER
let controller = {

  removeMainLoader : () => {
    const el = document.querySelector(".js_loader-main");
      el.parentNode.removeChild(el);
  },

  getUsername : function(){
    model.user.test;
    console.log("test",model.user.test);
  }, 
        
  init : function() {
    model.init();
    // view.init();
  }
};
// VIEWS
let view = {
    cacheElements : function() {
        this.navbar_wrapper = document.querySelector(".app-navbar__wrapper");
    },
    
    mountUserArea : function() {
        const mainEl = document.createElement("div");
            mainEl.classList.add("user-area");

        const userName = document.createElement("div");
            userName.classList.add("user-area__name");
            userName.textContent = controller.getUsername();

        mainEl.appendChild(userName);
        this.navbar_wrapper.appendChild(mainEl);
    },
    
    
    render : function() {

    },    
    
    init : function() {
        this.cacheElements();
        this.mountUserArea();
    }
};


window.addEventListener('DOMContentLoaded', () => {
    // controller.init();

    console.log(model);
});