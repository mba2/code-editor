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
	*  @param  {number} id
  */
  getUserPersonalInfo : function(id) {
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
						model.user.id = user['user'].id;
						model.user.name = user['user'].name;
						return user.user;
					} 
				});
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

