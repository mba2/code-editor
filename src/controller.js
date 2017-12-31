import { model } from "./model";
// CONTROLLER
export const controller = {
    views : [],
    addViews : function(viewList) {
        this.views = viewList.map(function(v) { return v; });
    },

    getUserName : function() {
        return model.user.name;
    },

    changeUserName : test => model.user.name = test,

    init : function() {
        // console.log(this.views);
        this.views.forEach( (view) => view.init());
    }
    
};

