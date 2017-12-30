// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

/** ALL MODULES ARE IMPORTED HERE 
*/ 

// import "./blocks/global/global";
// import "./blocks/user-area/user-area";

import "./blocks/header/header";
import "./blocks/user-area/user-area";

window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("I'm the one who knocks!");
});