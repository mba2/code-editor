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
 * IMPORT ALL VIEWS YOU WANNA WORK WITH ...
*/
import { User } from './blocks/user/User';
import { Login } from './blocks/login/Login';
import { Header } from './blocks/header/header';
// import { Editor } from './blocks/editor/editor';
	

/**
 * INSERT THE IMPORTED VIEWS INTO THE CONTROLLER.
 * THE CONTROLLER WILL INITIALIZE ALL THOSE VIEWS.
*/
Controller.addViews(
	User,
	Login,
	Header,
	// Editor
);

/**
 * INITIALIzE THE CONTROLLER
*/
Controller.init();

window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});