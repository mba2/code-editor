/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// MODEL
const model = {
  /** STATE INFO */
  "states": {
    "userInfo": false
  },
  "loadedModules": [],
  "failedModules": [],

  "user": {
    name: "Mario"
  },

  "app": {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = model;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);



// CONTROLLER
const controller = {
	views: [],
	addViews: function (...viewList) {
		this.views = viewList.map(function (v) {
			return v;
		});
	},

	getUserName: function () {
		return __WEBPACK_IMPORTED_MODULE_0__model__["a" /* model */].user.name;
	},

	changeUserName: function (test) {
		// this.debug.showCurrentViews.apply(this);
		// this.debug.firstView.apply(this);
		// this.debug.userInfo.apply(this);

		return __WEBPACK_IMPORTED_MODULE_0__model__["a" /* model */].user.name = test;
	},

	init: function () {
		this.views.forEach(view => view.init());
	},

	debug: {
		showCurrentViews: function () {
			console.log(`Views with for-of:`);
			for (let view of this.views) {
				console.log(view);
			}
			console.log(`Views with for-in:`);
			for (let i in this.views) {
				console.log(`view ${i}: `, this.views[i]);
			}
		},
		firstView: function () {
			let [first, ...rest] = this.views;
			console.log(`The First view: `, first);
			console.log(`The rest of the views: `, rest);
		},
		userInfo: function () {
			let { user, states } = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* model */];
			console.log(user);
			console.log(states);
		}
	}

};
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_area_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_area_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user_area_scss__);




const v_user_area = {
  cacheElements: function () {
    this.userName = document.querySelector(".user-area__name");
  },

  setUserName: function () {
    this.userName.innerText = __WEBPACK_IMPORTED_MODULE_0__controller__["a" /* controller */].getUserName();
  },

  changeUserName: function () {
    const SELF = this;
    let t = document.querySelector("#test");
    t.addEventListener("click", function () {
      __WEBPACK_IMPORTED_MODULE_0__controller__["a" /* controller */].changeUserName("Heisenberg");
      SELF.render();
    });
  },

  render: function () {
    console.log("Rendering user area!");
    this.setUserName();
  },

  init: function () {
    this.cacheElements();
    this.changeUserName();
    this.render();
  }
};
/* unused harmony export v_user_area */


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_user_area_user_area__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_editor_editor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_global_global__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_header_header__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_auth_box_auth_box__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_firebase_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_firebase_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__blocks_firebase_firebase__);
// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (false) {
	module.hot.accept();
}

/**
 *  MVC
*/
//====== MODEL

console.log("model:", __WEBPACK_IMPORTED_MODULE_0__model__["a" /* model */]);

//====== CONTROLLER

console.log("controller:", __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* controller */]);

//====== VIEWS


// import { v_auth_box } from './blocks/auth_box/';


__WEBPACK_IMPORTED_MODULE_1__controller__["a" /* controller */].addViews(
// v_user_area,
__WEBPACK_IMPORTED_MODULE_3__blocks_editor_editor__["a" /* v_editor */]);

__WEBPACK_IMPORTED_MODULE_1__controller__["a" /* controller */].init();

/** ALL MODULES ARE IMPORTED HERE 
*/








window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);


const v_editor = {
  cacheElements: function () {
    this.boxes = [].slice.call(document.querySelectorAll(".editor__box"));
  },

  getBoxesMeasures: function () {
    let boxes = document.querySelectorAll(".editor-box") || null;
    if (boxes) {
      boxes.forEach(box => {
        console.log(window.getComputedStyle(box).width);
      });
    }
  },

  createBoxes: function () {
    console.log(this.boxes);

    this.boxes.forEach(box => {
      let boxType = box.getAttribute('id');
      console.log(boxType);
    });
  },

  start: function () {
    let editor = ace.edit("editor--html");
    editor.setTheme("ace/theme/solarized_light");
    editor.session.setMode("ace/mode/html");

    let editor2 = ace.edit("editor--css");
    editor2.setTheme("ace/theme/solarized_light");
    editor2.session.setMode("ace/mode/css");

    let editor3 = ace.edit("editor--js");
    editor3.setTheme("ace/theme/solarized_light");
    editor3.session.setMode("ace/mode/js");

    // let editor = ace.edit("editor");
    // editor.setTheme("ace/theme/solarized_light");
    // editor.session.setMode("ace/mode/javascript");

    // document.querySelector("#save").addEventListener("click", () => {
    //   // console.log("save");

    //   editor.setValue(localStorage['last_pen']);
    //   // console.log(start.lastValue);
    // })
    // document.querySelector("#edit").addEventListener("click", () => {
    //   let test = editor.getValue();
    //   localStorage['last_pen'] = test;
    //   // this.lastValue = test;
    //   // start.lastValue = test;
    //   // console.log("",);
    // })
  },

  init: function () {
    this.cacheElements();
    this.createBoxes();

    this.start();

    document.querySelector("#measures").addEventListener("click", () => {
      this.getBoxesMeasures();
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = v_editor;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__global_scss__);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_scss__);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_box_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_box_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_box_scss__);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {


// Initialize Firebase
let config = {
    apiKey: "AIzaSyCXwp4swc8izbLAnIRm7C9QqfKkbgiaeiE",
    authDomain: "code-editor-5c1b3.firebaseapp.com",
    databaseURL: "https://code-editor-5c1b3.firebaseio.com",
    projectId: "code-editor-5c1b3",
    storageBucket: "code-editor-5c1b3.appspot.com",
    messagingSenderId: "76658150537"
};
firebase.initializeApp(config);

var model__users = firebase.database().ref().child('users');
// model__users.on('value', snap => console.log(snap.val()));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDBiMzk5NDRlNTFmMGIxZWZlMTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdXNlci1hcmVhL3VzZXItYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy91c2VyLWFyZWEvdXNlci1hcmVhLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lZGl0b3IvZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZWRpdG9yL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ2xvYmFsL19nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2F1dGgtYm94L19hdXRoLWJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZmlyZWJhc2UvZmlyZWJhc2UuanMiXSwibmFtZXMiOlsibW9kZWwiLCJuYW1lIiwiY29udHJvbGxlciIsInZpZXdzIiwiYWRkVmlld3MiLCJ2aWV3TGlzdCIsIm1hcCIsInYiLCJnZXRVc2VyTmFtZSIsInVzZXIiLCJjaGFuZ2VVc2VyTmFtZSIsInRlc3QiLCJpbml0IiwiZm9yRWFjaCIsInZpZXciLCJkZWJ1ZyIsInNob3dDdXJyZW50Vmlld3MiLCJjb25zb2xlIiwibG9nIiwiaSIsImZpcnN0VmlldyIsImZpcnN0IiwicmVzdCIsInVzZXJJbmZvIiwic3RhdGVzIiwidl91c2VyX2FyZWEiLCJjYWNoZUVsZW1lbnRzIiwidXNlck5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRVc2VyTmFtZSIsImlubmVyVGV4dCIsIlNFTEYiLCJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIndpbmRvdyIsInZfZWRpdG9yIiwiYm94ZXMiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Qm94ZXNNZWFzdXJlcyIsImJveCIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImNyZWF0ZUJveGVzIiwiYm94VHlwZSIsImdldEF0dHJpYnV0ZSIsInN0YXJ0IiwiZWRpdG9yIiwiYWNlIiwiZWRpdCIsInNldFRoZW1lIiwic2Vzc2lvbiIsInNldE1vZGUiLCJlZGl0b3IyIiwiZWRpdG9yMyIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsIm1vZGVsX191c2VycyIsImRhdGFiYXNlIiwicmVmIiwiY2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDTyxNQUFNQSxRQUFRO0FBQ25CO0FBQ0EsWUFBVztBQUNULGdCQUFZO0FBREgsR0FGUTtBQUtuQixtQkFBa0IsRUFMQztBQU1uQixtQkFBa0IsRUFOQzs7QUFRbkIsVUFBUztBQUNQQyxVQUFPO0FBREEsR0FSVTs7QUFZbkIs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QyxLQUExQixDQUFnQyxPQUFoQyxDQUFuQjtBQUNBLDZEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwYjM5OTQ0ZTUxZjBiMWVmZTExIiwiLy8gTU9ERUxcclxuZXhwb3J0IGNvbnN0IG1vZGVsID0ge1xyXG4gIC8qKiBTVEFURSBJTkZPICovXHJcbiAgXCJzdGF0ZXNcIiA6IHtcclxuICAgIFwidXNlckluZm9cIjogZmFsc2VcclxuICB9LFxyXG4gIFwibG9hZGVkTW9kdWxlc1wiIDogW10sXHJcbiAgXCJmYWlsZWRNb2R1bGVzXCIgOiBbXSxcclxuXHJcbiAgXCJ1c2VyXCIgOiB7XHJcbiAgICBuYW1lIDogXCJNYXJpb1wiXHJcbiAgfSxcclxuXHJcbiAgXCJhcHBcIiA6IHtcclxuICAgIFxyXG4gIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbi8vIENPTlRST0xMRVJcclxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSB7XHJcbiAgICB2aWV3cyA6IFtdLFxyXG4gICAgYWRkVmlld3MgOiBmdW5jdGlvbiguLi52aWV3TGlzdCkge1xyXG5cdFx0XHR0aGlzLnZpZXdzID0gdmlld0xpc3QubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHY7IH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRVc2VyTmFtZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gbW9kZWwudXNlci5uYW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VVc2VyTmFtZSA6IGZ1bmN0aW9uICh0ZXN0KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5kZWJ1Zy5zaG93Q3VycmVudFZpZXdzLmFwcGx5KHRoaXMpO1xyXG5cdFx0XHRcdC8vIHRoaXMuZGVidWcuZmlyc3RWaWV3LmFwcGx5KHRoaXMpO1xyXG5cdFx0XHRcdC8vIHRoaXMuZGVidWcudXNlckluZm8uYXBwbHkodGhpcyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBtb2RlbC51c2VyLm5hbWUgPSB0ZXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMudmlld3MuZm9yRWFjaCggXHJcblx0XHRcdFx0KHZpZXcpID0+IHZpZXcuaW5pdCgpXHJcblx0XHRcdCk7ICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgZGVidWcgOiB7XHJcblx0XHRcdHNob3dDdXJyZW50Vmlld3MgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgVmlld3Mgd2l0aCBmb3Itb2Y6YCk7XHJcblx0XHRcdFx0Zm9yIChsZXQgdmlldyBvZiB0aGlzLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh2aWV3KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYFZpZXdzIHdpdGggZm9yLWluOmApO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy52aWV3cykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYHZpZXcgJHtpfTogYCwgdGhpcy52aWV3c1tpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXJzdFZpZXcgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgW2ZpcnN0LC4uLnJlc3RdID0gdGhpcy52aWV3cztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgVGhlIEZpcnN0IHZpZXc6IGAsZmlyc3QpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBUaGUgcmVzdCBvZiB0aGUgdmlld3M6IGAscmVzdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHVzZXJJbmZvIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHsgdXNlciwgc3RhdGVzIH0gPSBtb2RlbDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh1c2VyKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhzdGF0ZXMpO1xyXG5cdFx0XHR9XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgXCIuL3VzZXItYXJlYS5zY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHZfdXNlcl9hcmVhID0ge1xyXG5cdGNhY2hlRWxlbWVudHMgOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMudXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYXJlYV9fbmFtZVwiKTtcclxuXHR9LFxyXG5cclxuICBzZXRVc2VyTmFtZSA6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51c2VyTmFtZS5pbm5lclRleHQgPSBjb250cm9sbGVyLmdldFVzZXJOYW1lKCk7XHJcbiAgfSxcclxuXHJcbiAgY2hhbmdlVXNlck5hbWUgOiBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IFNFTEYgPSB0aGlzO1xyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XHJcbiAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlVXNlck5hbWUoXCJIZWlzZW5iZXJnXCIpO1xyXG4gICAgICAgIFNFTEYucmVuZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICBcclxuICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyaW5nIHVzZXIgYXJlYSFcIik7XHJcbiAgICB0aGlzLnNldFVzZXJOYW1lKCk7XHJcbiAgfSxcclxuXHJcbiAgaW5pdCA6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jYWNoZUVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmNoYW5nZVVzZXJOYW1lKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3VzZXItYXJlYS91c2VyLWFyZWEuanMiLCIvLyBIT1QgTU9EVUxFIEFDQ0VQVElPTiBXSEVOIExPQURFUlMgRE9OJ1QgRE8gVEhBVFxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgTVZDXHJcbiovXHJcbi8vPT09PT09IE1PREVMXHJcbmltcG9ydCB7bW9kZWx9IGZyb20gXCIuL21vZGVsXCI7XHJcbmNvbnNvbGUubG9nKFwibW9kZWw6XCIsIG1vZGVsKTtcclxuXHJcbi8vPT09PT09IENPTlRST0xMRVJcclxuaW1wb3J0IHtjb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcbmNvbnNvbGUubG9nKFwiY29udHJvbGxlcjpcIixjb250cm9sbGVyKTtcclxuXHJcblxyXG4vLz09PT09PSBWSUVXU1xyXG5pbXBvcnQgeyB2X3VzZXJfYXJlYSB9IGZyb20gJy4vYmxvY2tzL3VzZXItYXJlYS91c2VyLWFyZWEnO1xyXG5pbXBvcnQgeyB2X2VkaXRvciB9IGZyb20gJy4vYmxvY2tzL2VkaXRvci9lZGl0b3InO1xyXG4vLyBpbXBvcnQgeyB2X2F1dGhfYm94IH0gZnJvbSAnLi9ibG9ja3MvYXV0aF9ib3gvJztcclxuXHRcclxuXHJcbmNvbnRyb2xsZXIuYWRkVmlld3MoXHJcblx0Ly8gdl91c2VyX2FyZWEsXHJcblx0dl9lZGl0b3JcclxuKTtcclxuXHJcbmNvbnRyb2xsZXIuaW5pdCgpO1xyXG5cclxuLyoqIEFMTCBNT0RVTEVTIEFSRSBJTVBPUlRFRCBIRVJFIFxyXG4qLyBcclxuXHJcbmltcG9ydCBcIi4vYmxvY2tzL2dsb2JhbC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCBcIi4vYmxvY2tzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IFwiLi9ibG9ja3MvdXNlci1hcmVhL3VzZXItYXJlYVwiO1xyXG5pbXBvcnQgXCIuL2Jsb2Nrcy9hdXRoLWJveC9hdXRoLWJveFwiO1xyXG5pbXBvcnQgXCIuL2Jsb2Nrcy9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJJJ20gdGhlIG9uZSB3aG8ga25vY2tzIVwiKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvdXNlci1hcmVhL3VzZXItYXJlYS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB2X2VkaXRvciA9IHtcclxuICBjYWNoZUVsZW1lbnRzIDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmJveGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRvcl9fYm94XCIpKTtcclxuXHR9LFxyXG4gIFxyXG4gIGdldEJveGVzTWVhc3VyZXMgOiBmdW5jdGlvbigpIHtcclxuICAgIGxldCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdG9yLWJveFwiKSB8fCBudWxsO1xyXG4gICAgICBpZihib3hlcykge1xyXG4gICAgICAgIGJveGVzLmZvckVhY2goIGJveCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3gpLndpZHRoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZUJveGVzIDogZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJveGVzKTtcclxuXHJcbiAgICB0aGlzLmJveGVzLmZvckVhY2goIGJveCA9PiB7XHJcbiAgICAgIGxldCBib3hUeXBlID0gYm94LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgY29uc29sZS5sb2coYm94VHlwZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCA6IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBlZGl0b3IgPSBhY2UuZWRpdChcImVkaXRvci0taHRtbFwiKTtcclxuICAgIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9zb2xhcml6ZWRfbGlnaHRcIik7XHJcbiAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvaHRtbFwiKTtcclxuXHJcbiAgICBsZXQgZWRpdG9yMiA9IGFjZS5lZGl0KFwiZWRpdG9yLS1jc3NcIik7XHJcbiAgICBlZGl0b3IyLnNldFRoZW1lKFwiYWNlL3RoZW1lL3NvbGFyaXplZF9saWdodFwiKTtcclxuICAgIGVkaXRvcjIuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvY3NzXCIpO1xyXG5cclxuICAgIGxldCBlZGl0b3IzID0gYWNlLmVkaXQoXCJlZGl0b3ItLWpzXCIpO1xyXG4gICAgZWRpdG9yMy5zZXRUaGVtZShcImFjZS90aGVtZS9zb2xhcml6ZWRfbGlnaHRcIik7XHJcbiAgICBlZGl0b3IzLnNlc3Npb24uc2V0TW9kZShcImFjZS9tb2RlL2pzXCIpO1xyXG5cclxuICAgIC8vIGxldCBlZGl0b3IgPSBhY2UuZWRpdChcImVkaXRvclwiKTtcclxuICAgIC8vIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9zb2xhcml6ZWRfbGlnaHRcIik7XHJcbiAgICAvLyBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvamF2YXNjcmlwdFwiKTtcclxuXHJcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgLy8gY29uc29sZS5sb2coXCJzYXZlXCIpO1xyXG4gICAgICBcclxuICAgIC8vICAgZWRpdG9yLnNldFZhbHVlKGxvY2FsU3RvcmFnZVsnbGFzdF9wZW4nXSk7XHJcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0Lmxhc3RWYWx1ZSk7XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyAgIGxldCB0ZXN0ID0gZWRpdG9yLmdldFZhbHVlKCk7XHJcbiAgICAvLyAgIGxvY2FsU3RvcmFnZVsnbGFzdF9wZW4nXSA9IHRlc3Q7XHJcbiAgICAvLyAgIC8vIHRoaXMubGFzdFZhbHVlID0gdGVzdDtcclxuICAgIC8vICAgLy8gc3RhcnQubGFzdFZhbHVlID0gdGVzdDtcclxuICAgIC8vICAgLy8gY29uc29sZS5sb2coXCJcIiwpO1xyXG4gICAgLy8gfSlcclxuICB9LFxyXG5cclxuICBpbml0IDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNhY2hlRWxlbWVudHMoKTtcclxuICAgIHRoaXMuY3JlYXRlQm94ZXMoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWFzdXJlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldEJveGVzTWVhc3VyZXMoKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9lZGl0b3IvZWRpdG9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvZWRpdG9yL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2dsb2JhbC9fZ2xvYmFsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9hdXRoLWJveC9fYXV0aC1ib3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiICAgIFxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lDWHdwNHN3YzhpemJMQW5JUm03QzlRcWZLa2JnaWFlaUVcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcImNvZGUtZWRpdG9yLTVjMWIzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29kZS1lZGl0b3ItNWMxYjMuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwiY29kZS1lZGl0b3ItNWMxYjNcIixcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcImNvZGUtZWRpdG9yLTVjMWIzLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzY2NTgxNTA1MzdcIlxyXG4gICAgICB9O1xyXG4gICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbiAgICAgICAgXHJcbiAgICAgIHZhciBtb2RlbF9fdXNlcnMgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCd1c2VycycpO1xyXG4gICAgICAvLyBtb2RlbF9fdXNlcnMub24oJ3ZhbHVlJywgc25hcCA9PiBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZmlyZWJhc2UvZmlyZWJhc2UuanMiXSwic291cmNlUm9vdCI6IiJ9