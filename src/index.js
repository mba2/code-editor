// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
// if (module.hot) {
// 	module.hot.accept();
// }

/**
 * IMPORT AND INITIALIZE THE MODEL
*/
import {store} from "./store";
store.init();
// console.log("store:", store);

/**
 * IMPORT THE CONTROLLER
*/
import {controller} from "./controller";
console.log("controller:",controller);


/**
 * IMPORT ALL VIEWS YOU WANNA WORK WITH ...
*/
import { v_user_area } from './blocks/user-area/user-area';
// import { v_editor } from './blocks/editor/editor';
// import { v_auth_box } from './blocks/auth_box/';
	

/**
 * INSERT THE IMPORTED VIEWS INTO THE CONTROLLER.
 * THE CONTROLLER WILL INITIALIZE ALL THOSE VIEWS.
*/
controller.addViews(
	v_user_area,
	// v_editor
);

/**
 * INITIALIzE THE CONTROLLER
*/
controller.init();

window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});