'use strict';
import { Component } from "./core/Component";
import { Metadata } from "./core/Metadata";

// import { Util } from "./Util/Util";

// CONTROLLER
export class Controller {

	constructor(settings) {
		// console.log(settings);
		// if()
		this._components = [];
		this._instances = [];
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
		components.forEach(component => {
			if(this._components.includes(component)) {
				throw { "message" : "One or more component(s) was(were) added twice."};
			} else {
				this._components = this._components.concat(component);
			} 
		});
	
		// CHECKING FOR A SELECTOR PROPERTY
		// 	if (!component.selector) {
		// 		console.warn('This component doesn`t have a `selector` property:', component);
		// 	}
	};

	instatiateComponents() {
		Metadata.components.forEach( e => {
			let instance = new e.constructor(e);
		});
	}

  storeStatus() {
		const self = this;
		// return function() {
			document.body.addEventListener('keyup', (e) => {
				if(e.keyCode === 27) {
					console.log('controller: ', self);
					console.log('metadata: ', Metadata.components);
				}
			})
		// }
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
			this.storeStatus();
			this.instatiateComponents();
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

