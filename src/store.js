import { StoreHelper } from './core/StoreHelper';
import { Metadata } from './core/Metadata';

// MODEL
export class Store {

  constructor() {
    
    // this._requiredModules = [
    //   "userPersonalInfo"
    //   // "userPlayInfo"
    // ];
    // /** STATE INFO */
    // this._successfulModules =  [];
    // this._failedModules =  [];
    this._user = {
      "id" :  null,
      "name" :  null,
      "photo" :  null,
      "pens" :  null,
      "lastPenId" : null
    };
  }

  get user() {
    return this._user;
  }

  set user(data) {
    this._user.id = (data.id) || this.user.id;
    this._user.name = (data.name) || this.user.name;
    this._user.photo = (data.photo) || this.user.photo;
    this._user.pens = (data.pens) || this.user.pens;
    this._user.lastPenId = (data.lastPenId) || this.user.lastPenId;
  }
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
    // StoreHelper.checkAppicationStart(1,5);
  }
};