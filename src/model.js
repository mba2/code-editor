import { AppHelpers } from "./blocks/app-helpers/app-helpers";

// MODEL
export const model = {
  /** LIST MODEL 
   * A LIST CONTAINING ALL PARTS OF DATA THAT MUST BE SET INTO THE MODEL
   * SO THE APPLICATION CAN WORK
  */
  "expectedModules" : [
    "userPersonalInfo"
    // "userPlayInfo"
  ],
  /** STATE INFO */
  "successfulModules" : [],
  "failedModules" : [],

  "user" : {
    "name" :  null
  },

  "app" : {
    
  },

  /**
   * FUNCTIONS THAT ARE RESPONSIBLE FOR THE `MODEL` OPERATION
  */
  applicationIsReady : function applicationIsReady(attempts) {
    if(!applicationIsReady.counter) {
      applicationIsReady.counter = 0;
      // console.log(typeof applicationIsReady.counter);
    }
    else {
      console.log("Works");
    }
    
    setTimeout(() => {
        if(applicationIsReady.counter > 3) {
          console.log("failed");
          return;
        }else {
          applicationIsReady.counter++;
          console.log(applicationIsReady.counter);
            applicationIsReady();
        }
        //     console.warn("App is not fully loaded");
        //   }else {
          //     applicationIsReady.counter++;
          
          //   }
          
    }, 1500);     
  },
  /**
   ** FUNCTIONS THAT MUST BE INVOKED SO THE APPLICATION CAN BE CONSIDERED
   ** READY TO USE 
  */
  userPersonalInfo : function(id) {
    if(!id) {
      console.warn("No user id was given to retrieve user personal data");  
      return false;
    }

    let url = "https://my-json-server.typicode.com/mba2/fake-data/users",
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
    this.userPersonalInfo(2445);
    this.applicationIsReady();
  }
};