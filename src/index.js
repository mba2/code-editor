// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

import { Controller } from "./controller";
import { Metadata } from './core/Metadata';
import { Store } from './store';

const controller = new Controller({
	// metadata : new Metadata(),
	store : new Store(),
});

/**
 * IMPORT ALL COMPONENTS YOU WANNA WORK WITH ...
 */
// import { Login } from "./components/login/Login";
import { StarterComponent } from "./components/starter-component/starter-component";
	
/**
 * INSERT THE IMPORTED COMPONENTS INTO THE CONTROLLER.
 * THIS CONTROLLER WILL INITIALIZE ALL THOSE COMPONENTS.
*/
controller.addComponents(
	// Login,
	StarterComponent
);


/**
 * INITIALIzE THE CONTROLLER
*/
controller.init();


window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});