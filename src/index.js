// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
// if (module.hot) {
// 	module.hot.accept();
// }

/**
 * IMPORT AND INITIALIZE THE MODEL
*/
import {Store} from "./store";
Store.init();

/**
 * IMPORT THE CONTROLLER
*/
import {Controller} from "./controller";

/**
 * IMPORT ALL COMPONENTS YOU WANNA WORK WITH ...
*/

	

/**
 * INSERT THE IMPORTED COMPONENTS INTO THE CONTROLLER.
 * THE CONTROLLER WILL INITIALIZE ALL THOSE COMPONENTS.
*/
// Controller.addComponents(
// 	// User
// );

/**
 * INITIALIzE THE CONTROLLER
*/
// Controller.init();

window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});