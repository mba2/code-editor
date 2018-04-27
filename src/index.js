// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
// if (module.hot) {
// 	module.hot.accept();
// }

/**
 * IMPORT AND INITIALIZE THE MODEL
*/
import {Store} from "./store";
const store = new Store();

/**
 * IMPORT THE CONTROLLER
*/
import {Controller} from "./controller";
const controller = new Controller(store);

/**
 * IMPORT ALL COMPONENTS YOU WANNA WORK WITH ...
 */
import { Login } from "./components/login/Login";
	

/**
 * INSERT THE IMPORTED COMPONENTS INTO THE CONTROLLER.
 * THIS CONTROLLER WILL INITIALIZE ALL THOSE COMPONENTS.
*/
controller.addComponents(
	Login
);

/**
 * INITIALIzE THE CONTROLLER
*/
controller.init();


window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});