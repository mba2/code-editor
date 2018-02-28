/**
 * IMPORT THIS MODULE'S STYLES
*/
import "./_v_plays.scss";
/**
 * IMPORT THE CONTROLLER
*/
import { controller } from "../../controller";

export const v_plays = {

	cacheElements : function() {
    this.dom_playsContainer = document.querySelector(".plays");
    this.dom_loadBtn = document.querySelector("#load");
  },
  
  /**
   * @param  {array[object]} plays
   */
  setUserPlays : function(plays) {
    plays.forEach((play) => {
      let el = document.createElement('div');
          el.classList.add('play');

      let id = document.createElement('span');
          id.classList.add('play__id');
          id.textContent = play.id;

      let name = document.createElement('span');
          name.classList.add('play__name');
          name.textContent = play.name;
      
      el.appendChild(id);
      el.appendChild(name);
      this.dom_playsContainer.appendChild(el);
    });
  },  

  /**
    * ALL HANDLERS EVENTS FOR THIS VIEW IS PUT INSIDE THIS ARRAY. 
    * THIS HANDLERS WILL BE SET ON THE init() METHOD
  */ 
  handlers : [
    function(SELF) {
      SELF.dom_loadBtn.addEventListener('click', function() {
        controller.userPlays.call(SELF,'001');
      });
    }
  ],

  /**
    * ALL METHODS OF THIS VIEW THAT MUST BE EXECUTED ON THE INITIALIZATION
  */ 
  init : function() {
    this.cacheElements();

    /**
     *  SET ALL VIEW`S EVENT HANDLERS
    */
    this.handlers.forEach(handler => handler(this));
  }
};


