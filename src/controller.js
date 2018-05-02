'use strict';
import { Component } from "./core/Component";
import { Metadata } from "./core/Metadata";

// import { Util } from "./Util/Util";

// CONTROLLER
export class Controller {

	constructor(settings) {
		console.log(settings);
		// if()
		// this._instantiatedComponents = {};
		// this._instances = [];
		// this._debug = {
		// 	"storeStatus" : this.storeStatus()
		// };
		// this._Store = Store;
	}
	

	/**
	 * 
	 * @param {[component]} components 
	 * 
	 */

	addComponents(...components) {

		this._instantiatedComponents = components.reduce( (acc,component,i,arr) => {
			// CHECKING FOR A SELECTOR PROPERTY
			if (!component.selector) {
				console.warn('This component doesn`t have a `selector` property:', component);
			}else {
			// CHECKING FOR SELECTOR IN THE INDEX.HTML	
				const tags = [...document.querySelectorAll(component.selector)];
				if(!tags.length) {
					console.warn(`No selector for this component: `, component);
					return '';
				} 

				const instance = new component();
				
				// SET HTML FOR THE COMPONENT
				instance.setHTML();
				// SET STYLES FOR THE COMPONENT IF IT`S THE FIRST OF ITS TYPE
				if(!this._instantiatedComponents.hasOwnProperty(component.selector)) {
						instance.setStyles();
				}
			}


			// WITH ARRAY
			// const newComponents = components.reduce( (acc,component) => {
				
			// 	return acc.concat({
			// 		name : component.selector,
			// 		html : component.html,
			// 		styles : component.styles
			// 	});
			// },[]);
			// this._instantiatedComponents = this._instantiatedComponents.concat(newComponents);

		// WITH OBJECT
			return Object.assign({
				[component.selector] : {
					html : component.html,
					styles : component.styles
				}	
			}, this._instantiatedComponents);
		},this._instantiatedComponents);
	};

  storeStatus() {
		const self = this;
		
		return function() {
			document.body.addEventListener('keyup', (e) => {
				if(e.keyCode === 27) {
					console.log('controller: ', self);
					console.log('metadata: ', Metadata.components);
				}
			})
		}
	};

		// 	showCurrentViews : function() {
		// 		console.log(`Views with for-of:`);
		// 		for (let view of this.views) {
		// 			console.log(view);
		// 		}
		// 		console.log(`Views with for-in:`);
		// 		for (let i in this.views) {
		// 			console.log(`view ${i}: `, this.views[i]);
		// 		}
		// 	},

		// 	firstView : function() {
		// 		let [first,...rest] = this.views;
		// 		console.log(`The First view: `,first);
		// 		console.log(`The rest of the views: `,rest);
		// 	},

		// 	userInfo : function() {
		// 		let { user, states } = model;
		// 		console.log(user);
		// 		console.log(states);
		// 	}
		// };

		init() {
			// this._debug.storeStatus();

			// const loginComponent = this.views['login'];
			// const headerComponent = this.views['app-header'];

			// loginComponent['init'].call(loginComponent);

			// Util.userAuthentication('001')
			// 	.then( () => {
			// 		try {
			// 			// this.views.forEach( 
			// 			// 	(view) => view.init()
			// 			// );     
			// 			loginComponent.hideLoginBox();
			// 			headerComponent.init.call(headerComponent);

			// 		}catch(e) { console.warn(e) }
			// 	});
			// DEBUG FUNCTION
			// this.debug.storeStatus.call(this);   
		};
};

