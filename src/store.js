import { StoreHelper } from './core/StoreHelper';

// MODEL
export class Store {
  // /** LIST STORE 
  //  * A LIST CONTAINING ALL PARTS OF DATA THAT MUST BE SET INTO THE STORE
  //  * SO THE APPLICATION CAN WORK
  // */
  // "requiredModules" : [
  //   "userPersonalInfo"
  //   // "userPlayInfo"
  // ],
  // /** STATE INFO */
  // "successfulModules" : [],
  // "failedModules" : [],

  // "user" : {
  //   "id" :  null,
  //   "name" :  null,
  //   "photo" :  null,
  //   "pens" :  null,
  //   "lastPenId" : null
  // },

  // "app" : {
  //   "isReady" : true,
  //   "userIsLogged" : false,
  //   "hasActivePlay" : false
  // },

  // /**
  //  * FUNCTIONS THAT ARE RESPONSIBLE FOR THE `STORE` OPERATION
  // */

  

  // savePen : function(pen) {
  //   if(!this.app.userIsLogged) {
  //     console.log("Can`t save cause' you`re not logged!");
  //     return false;
  //   }
  //   // TO DO: WHEN MAKE A POST/PUT/PACTH REQUEST TO THE SERVER....
  //   this.user.pens.push(pen);
  // },

  static init() {
    StoreHelper.checkAppicationStart(1,5);
  }
};