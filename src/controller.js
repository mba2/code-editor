'use strict';

/** 
 * APP UTILITIES 
 * AN OBJECT THAT HOLDS HELPER FUNCTIONS TO BE USED BY THE APPLICATION
*/
import { AppHelpers } from "./blocks/app-helpers/app-helpers";

/**
 * IMPORT THE MODEL
*/
import { model } from "./model";

export const controller = {
	views : [],
	
	/**
	 * @param  {object} ...viewList
	 */
	loadViews : function(...viewList) {
		this.views = viewList.map(function(v) { return v; });
	},

	/*
	*  @param  {string} id
  */
  userPersonalInfo : function(id) {
    if(!id) {
      console.warn("No user id was given to retrieve user personal data");  
      return false;
    }

		let url = "https://my-json-server.typicode.com/mba2/code-editor/users",
			loadingModule = "userPersonalInfo";

		AppHelpers.customFetch(url,loadingModule)
			.then( (data) => {
					data.filter( (user) => {
						if(user.id == id) {
							/** INFORM THE APPLICATION THAT A SPECIFIC CHUNCK OF DATA WAS SUCCESSFUL LOADED  */ 
							model.successfulModules.push(loadingModule);
							/** STORE THE USER'S INFO RETURNED FROM THE SERVER   */ 
							model.user.id = user.id;
							model.user.name = user.name;
							model.user.photo = user.photo;
						} 
					});		
					/** UPDATE THIS VIEW */
					this.setUserInfo(model.user);				
			})
			.catch( (data) => { console.log(data);})
	},

	
	init : function() {
		/**
		 * THE LOOP WILL EXECUTE A init() METHOD FOR ALL LOADED VIEWS
		*/
		this.views.forEach( 
			(view) => view.init()
		);        
	}    
};

