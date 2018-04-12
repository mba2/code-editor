export class StoreHelper {
  constructor() {

  }

  /**
   * @param  {number} counter
   * @param  {number} attempts
   */
  static checkAppicationStart(counter,attempts) {

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
  };

}