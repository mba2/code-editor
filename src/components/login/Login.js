import { Component } from "../../core/Component";

export class Login extends Component{
  constructor() {
    super(null);
  }

  static get selector() {
    return 'Login';
  }
}

// import "./login.scss";
// import html from './login.html';

// export class Login = {
//   selector : 'login',

//   hideLoginBox : function() {
//     try {
//       document.querySelector('.login-comp')
//       .classList.remove('unknown-user');
//     }catch(e) { console.warn(e) }
//   },

//   render : function() {
//     const nodes = [...document.querySelectorAll('login')];
    
//     nodes.forEach( node => {
//       node.innerHTML = html;
//     });
//   },

//   init : function() {
//     this.render();
    
//     // this.cacheElements();
//     // this.changeUserName();
//   }
// }