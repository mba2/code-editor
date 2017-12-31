// CONTROLLER
export const controller = {
    views : [],
    addViews : function(viewList) {
        this.view = viewList.map(function(v) { return v; });
    }
};

