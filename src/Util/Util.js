import { Store } from "../store";

export const Util = {
  /**
   * @param  {string} moduleName
   * @param  {string} status
  */
  unexpectedRequest : function(moduleName,status) {
    store.failedModules.push(moduleName);
    console.warn("Request failed: " + status);
    return false;
  },
  
  /**
   * @param  {string} url
   * @param  {string} loadingModule
   */
  customFetch : function(url, loadingModule) {
    return (
      fetch(url)
      .then(response => {
        // IF THE RESPONSE FAILS.. THE loadPersonalInfo MUST BE CONSIDERED AS 'FAILED'
        if(response.status !== 200) {
          this.unexpectedRequest(loadingModule,response.status)
          return Promise.reject("A response has failed");
        }
              
        return response.json();
      })
    )
  },

  /**
   ** FUNCTIONS THAT MUST BE INVOKED SO THE APPLICATION CAN BE CONSIDERED
   ** READY TO USE 
   *  @param  {string} id
   */
  userAuthentication : function(id) {
    if(!id) {
      console.warn("No user id was given to retrieve user personal data");  
      return false;
    }

    let url = "https://my-json-server.typicode.com/mba2/code-editor/users",
      loadingModule = "userPersonalInfo";

      return (
          Util.customFetch(url,loadingModule)
          .then( (data) => {
            
              Store.app.userIsLogged = false;
              
              Store.user = data.filter( (user) => {
                if(user.id == id) {
                  return user;
                }
              });
              /** ONLY IF A REQUIRED MODULE IS PASSED... WE PUSH IT INTO THE STORE */
              if(loadingModule) {
                Store.successfulModules.push(loadingModule);
              }

              try {
                document.querySelector('.login-comp')
                  .classList.remove('unknow-user');
                  // console.log(Store);

              }catch(e) { console.warn(e) }
          })
          .catch( (data) => { console.log(data);})
      );
  },
}