import { AppHelpers } from "./blocks/app-helpers/app-helpers";

// MODEL
export const model = {
  /** LIST MODEL 
   * A LIST CONTAINING ALL PARTS OF DATA THAT MUST BE SET INTO THE MODEL
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
    "name": null,
    "id"  : null,
    "photo" : null,
    "plays" : null
  },

  "app" : {
    
  },

  /**
   * FUNCTIONS THAT ARE RESPONSIBLE FOR THE `MODEL` OPERATION
  */

  /**
   * @param  {number} counter
   * @param  {number} attempts
   */
  applicationIsReady : function applicationIsReady(counter,attempts) {
    
    let modulesToLoad = model.requiredModules.length || 0;
    
    /** IF NO MODULE IS REQUIRED ... TERMINATE THIS FUNCTION*/
    if(!modulesToLoad) return;

    setTimeout(() => { 
      if(counter > attempts) {
        console.warn("A module hasn`t been loaded!");
        return;
      }
      // console.log("Checking!!!!!");
      if(model.requiredModules.length === model.successfulModules.length) {
        console.log("all set");
        return true;
      }        
      // CALL THE FUNCTION ANOTHER TIME
      applicationIsReady(++counter,attempts);
    }, 1000);     
  },
  
  /**
   ** FUNCTIONS THAT MUST BE INVOKED SO THE APPLICATION CAN BE CONSIDERED
   ** READY TO USE 
   *  @param  {} id
   */
  userPersonalInfo : function(id) {
    if(!id) {
      console.warn("No user id was given to retrieve user personal data");  
      return false;
    }

    let url = "https://my-json-server.typicode.com/mba2/fake-data/uses",
      loadingModule = "userPersonalInfo";

    AppHelpers.customFetch(url,loadingModule)
      .then( (data) => {
        model.userInfo = data.filter( (user) => {
          if(user['user'].id == id) {
            model.successfulModules.push(loadingModule);
            model.user.name = user['user'].name;
            return user.user;
          } 
        });
      })
      .catch( (data) => { console.log(data);})
  },

  init : function() {
    // this.userPersonalInfo(2445);
    // this.applicationIsReady(1,3);
  }
};