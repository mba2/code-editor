import { model } from "../../model";

export const AppHelpers = {
  /**
   * @param  {string} moduleName
   * @param  {string} status
  */
  unexpectedRequest : function(moduleName,status) {
    model.failedModules.push(moduleName);
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
  }
}