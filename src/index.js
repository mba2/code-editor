// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

/**
 *  MVC
*/
//====== MODEL
import model from "./model";

//====== CONTROLLER
import controller from "./controller";

//====== VIEWS








/** ALL MODULES ARE IMPORTED HERE 
*/ 

import "./blocks/global/global";

import "./blocks/header/header";
import "./blocks/user-area/user-area";
import "./blocks/auth-box/auth-box";
import "./blocks/firebase/firebase";

window.addEventListener('DOMContentLoaded', () => {
    console.log("I'm the one who knocks!");

		console.log("Intializing controller...");
		controller.init();

});