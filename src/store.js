'use strict';

import { Util } from './Util/Util';

// MODEL
export const Store = {
  /** LIST STORE 
   * A LIST CONTAINING ALL PARTS OF DATA THAT MUST BE SET INTO THE STORE
   * SO THE APPLICATION CAN WORK
  */
  "requiredModules" : [
    "userPersonalInfo"
    // "userPlayInfo"
  ],
  /** STATE INFO */
  "successfulModules" : [],
  "failedModules" : [],

  "user" : {
    "id" :  null,
    "name" :  null,
    "photo" :  null,
    "pens" :  null,
    "lastPenId" : null
  },

  "app" : {
    "isReady" : true,
    "userIsLogged" : false,
    "hasActivePlay" : false
  },

  /**
   * FUNCTIONS THAT ARE RESPONSIBLE FOR THE `STORE` OPERATION
  */

  /**
   * @param  {number} counter
   * @param  {number} attempts
   */
  checkAppicationStart : function checkAppicationStart(counter,attempts) {

    let modulesToLoad = this.requiredModules.length || 0;
    
    /** IF NO MODULE IS REQUIRED ... TERMINATE THIS FUNCTION*/
    if(!modulesToLoad) return;

    setTimeout(() => { 

      if(counter > attempts) {
        console.warn("A module hasn`t been loaded! Application may not work correctly");
        this.app.isReady = false;
        return;
      }

      if(this.requiredModules.length === this.successfulModules.length) {
        // console.log("all set");
        return true;
      }        
      // CALL THE FUNCTION ANOTHER TIME
      checkAppicationStart.call(this,++counter,attempts);
    }, 1000);     
  },
  

  savePen : function(pen) {
    if(!this.app.userIsLogged) {
      console.log("Can`t save cause' you`re not logged!");
      return false;
    }
    // TO DO: WHEN MAKE A POST/PUT/PACTH REQUEST TO THE SERVER....
    this.user.pens.push(pen);
  },

  init : function() {
    // this.userPersonalInfo('001');
    this.checkAppicationStart(1,5);
  }
};