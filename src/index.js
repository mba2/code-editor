// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
// if (module.hot) {
// 	module.hot.accept();
// }

/**
 *  MVC
*/
//====== MODEL
import {model} from "./model";
model.init();
console.log("model:", model);

//====== CONTROLLER
import {controller} from "./controller";
// console.log("controller:",controller);


//====== VIEWS
// import { v_user_area } from './blocks/user-area/user-area';
// import { v_editor } from './blocks/editor/editor';
// import { v_auth_box } from './blocks/auth_box/';
	

controller.addViews(
	// v_user_area,
	// v_editor
);

controller.init();

/** ALL MODULES ARE IMPORTED HERE 
*/ 

import "./blocks/global/global";

import "./blocks/header/header";
import "./blocks/user-area/user-area";
import "./blocks/auth-box/auth-box";
import "./blocks/firebase/firebase";

window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});