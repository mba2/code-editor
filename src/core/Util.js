import { Store } from "../store";

export class Util {
  /**
   * @param  {string} moduleName
   * @param  {string} status
  */
  unexpectedRequest(moduleName,status) {
    store.failedModules.push(moduleName);
    console.warn("Request failed: " + status);
    return false;
  };
  
  /**
   * @param  {string} url
   * @param  {string} loadingModule
   */
  customFetch(url, loadingModule) {
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
  };

  /**
   ** FUNCTIONS THAT MUST BE INVOKED SO THE APPLICATION CAN BE CONSIDERED
   ** READY TO USE 
   *  @param  {string} id
   */
  userAuthentication(id) {
    if(!id) {
      console.warn("No user id was given to retrieve user personal data");  
      return false;
    }

    let url = "https://my-json-server.typicode.com/mba2/code-editor/users",
      loadingModule = "userPersonalInfo";

      return (
          Util.customFetch(url,loadingModule)
          .then( (data) => {
            
            Store.user = data.reduce( (acc,user, i) => {
              if(user.id === id) {
                acc['id'] = user['id'],
                acc['lastPenId'] = user['lastPenId'],
                acc['name'] = user['name'],
                acc['pens'] = user['pens'],
                acc['photo'] = user['photo']
              }
              return acc;
            },{});

            /** ONLY IF A REQUIRED MODULE IS PASSED... WE PUSH IT INTO THE STORE */
            if(loadingModule) {
              Store.successfulModules.push(loadingModule);
            }
        })
        .catch( (data) => { console.log(data);})
      );
  };
}