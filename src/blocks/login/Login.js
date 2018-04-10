import "./login.scss";
import html from './login.html';

export const Login = {
  selector : 'login',

  hideLoginBox : function() {
    try {
      document.querySelector('.login-comp')
      .classList.remove('unknown-user');
    }catch(e) { console.warn(e) }
  },

  render : function() {
    const nodes = [...document.querySelectorAll('login')];
    
    nodes.forEach( node => {
      node.innerHTML = html;
    });
  },

  init : function() {
    this.render();
    
    // this.cacheElements();
    // this.changeUserName();
  }
}