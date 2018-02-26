// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
// if (module.hot) {
// 	module.hot.accept();
// }

/**
 *  MVC
 */

/**
 * IMPORT AND INITIALIZE THE MODEL
*/
import {model} from "./model";
model.init();


/**
 * IMPORT THE CONTROLLER
*/
import {controller} from "./controller";
// console.log("controller:",controller);

/**
 * IMPORT ALL VIEWS YOU WANNA WORK...
*/
import { v_user_area } from './blocks/user-area/v_user-area';
// import { ... } from '...';
// import { ... } from '...';

/**
 * INSERT THE IMPORTED VIEWS INTO THE CONTROLLER.
 * THE CONTROLLER WILL INITIALIZE ALL THOSE VIEWS.
*/
controller.loadViews(
	v_user_area
	// ...,
	// ...
);

controller.init();


window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
	console.log("model:", model);
	console.log("controller:", controller);
});