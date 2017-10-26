// MODEL
let model = {
    "user" : {},

    setUserInfo : function() {
        $.getJSON('../resources/sql/fake-data.json').then( (data) => { 
            this.user = data['users'][0]
        });
    },

    init : function() {
        this.setUserInfo();
    }
};

// CONTROLLER
let controller = {
    
    getUserPlays : function() {
        return model.user.plays;
    },

    onPlayClick : function() {

    },
    
    init : function() {
        console.log("Starting Code Editor");
        console.log(this);

        // INITIALIZE THE MODEL
        model.init();

        // INITIALIZE CONTROLLER'S METHODS
        // this.getUserPlays();

        // INITIALIZE APP`S VIEWS
        v_user_menu.init();
    }
}
// VIEWS
let v_user_menu = {

    // VIEW PROPERTIES
    renderPlays : true,

    // VIEW ELEMENS
        
        // PRE LOAD
        dom_playsList : document.querySelector('.user-menu'),
        
        // POST LOAD
    

    // VIEW METHODS
    createPlayItem : function(item) {
        // A WRAPPER TO STORE THE PLAY ITEM
        let dom_play_wrapper = document.createElement("ul");
            dom_play_wrapper.classList = 'user-menu__wrapper';
        
        // THE PLAY ITEM ITSELF 
        let dom_play_item = document.createElement("li");
            dom_play_item.classList = "user-menu__play-item";
            dom_play_item.textContent = item.name;
        
        // MOUNT AND RETURN THE PLAY ITEM 
        return dom_play_wrapper.appendChild(dom_play_item);
    },
    
    mountPlaysList : function() {
        let _this = this;
        let plays = controller.getUserPlays();      // STORE ALL USER'S PLAYS IN AN ARRAY
        
        plays.forEach(function(play) {             
            dom_playsList.appendChild( _this.createPlayItem(play) );    
        });

        return dom_playsList;
    },
    
    cacheElements : function() {
        
    },
    
    // RENDER FUNCTION 
    render : function() {
        // this.mountPlaysList();
        // if(this.renderPlays) this.mountPlaysList();
    },    
    
    // INTIALIZE FUNCTION 
    init : function() {
        this.mountPlaysList();
        
    }
}

window.addEventListener('DOMContentLoaded', () => {
    controller.init();
});