'use strict';

import { model } from "./model";
// CONTROLLER
export const controller = {
    views : [],
    addViews : function(...viewList) {
        this.views = viewList.map(function(v) { return v; });
    },

    getUserName : function() {
        return model.user.name;
    },

    changeUserName : function (test) {
				this.debug.showCurrentViews.apply(this);
				this.debug.firstView.apply(this);
				this.debug.userInfo.apply(this);
				
        return model.user.name = test;
    },

    init : function() {
        this.views.forEach( 
            (view) => view.init()
        );

        
    },

    debug : {
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
    }
    
};

