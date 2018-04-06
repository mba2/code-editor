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
import {controller} from "./controller";

/**
 * IMPORT ALL VIEWS YOU WANNA WORK WITH ...
*/
import { Login } from './blocks/login/Login';
import { User } from './blocks/user/User';
import { v_editor } from './blocks/editor/editor';
// import { v_auth_box } from './blocks/auth_box/';
	

/**
 * INSERT THE IMPORTED VIEWS INTO THE CONTROLLER.
 * THE CONTROLLER WILL INITIALIZE ALL THOSE VIEWS.
*/
controller.addViews(
	User,
	Login,
	v_editor
);

/**
 * INITIALIzE THE CONTROLLER
*/
controller.init();

window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});