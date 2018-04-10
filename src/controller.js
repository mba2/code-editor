'use strict';

import { Store } from "./store";
import { Util } from "./Util/Util";

// CONTROLLER
export const Controller = {
    views : [],
    addViews : function(...viewList) {
			this.views = viewList.reduce( (acc,view,i) => { 
				if (view.selector)
					acc[view.selector] = view;
				return acc; 
			}, {});
    },

    debug : {
			storeStatus : function() {
				document.body.addEventListener('keyup', (e) => {
					if(e.keyCode === 27) {
						console.log('controller: ', this);
						console.log('store:', Store);
					}
				})
			},

			showCurrentViews : function() {
				console.log(`Views with for-of:`);
				for (let view of this.views) {
					console.log(view);
				}
				console.log(`Views with for-in:`);
				for (let i in this.views) {
					console.log(`view ${i}: `, this.views[i]);
				}
			},

			firstView : function() {
				let [first,...rest] = this.views;
				console.log(`The First view: `,first);
				console.log(`The rest of the views: `,rest);
			},

			userInfo : function() {
				let { user, states } = model;
				console.log(user);
				console.log(states);
			}
		},

		init : function() {
			const loginComponent = this.views['login'];
			const headerComponent = this.views['app-header'];

			loginComponent['init'].call(loginComponent);

			Util.userAuthentication('001')
				.then( () => {
					try {
						// this.views.forEach( 
						// 	(view) => view.init()
						// );     
						loginComponent.hideLoginBox();
						headerComponent.init.call(headerComponent);

					}catch(e) { console.warn(e) }
				});
			// DEBUG FUNCTION
			this.debug.storeStatus.call(this);   
		},
};

