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

		return AppHelpers.customFetch(url,loadingModule)
			.then( (data) => {
				let result = null;

					model.userInfo = data.filter( (user) => {
						if(user.id == id) {
							model.successfulModules.push(loadingModule);
							model.user.id = user.id;
							model.user.name = user.name;
							result = user;
							return this;
						} 
					});		
						
					return result;			
			})
			.catch( (data) => { console.log(data);})

			// return model.user;
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

