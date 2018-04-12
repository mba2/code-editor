'use strict';

import { Store } from "./store";
// import { Util } from "./Util/Util";

// CONTROLLER
export class Controller {

	constructor(Store) {
		this._components = [];
		this._debug = {
			"storeStatus" : this.storeStatus()
		};
		this._Store = Store;
	}
		
	addComponents(...components) {
		this._components = components.reduce( (acc,component,i) => { 
			let instance = new component();

			if (!instance.selector) {
				console.warn('This component doesn`t have a `selector` property:', component);
				return false;
			}
			acc[instance.selector] = instance;
			return acc; 
		}, {});
	};

  storeStatus() {
		const self = this;
		
		return function() {
			document.body.addEventListener('keyup', (e) => {
				if(e.keyCode === 27) {
					console.log('controller: ', self);
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
			this._debug.storeStatus();

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

