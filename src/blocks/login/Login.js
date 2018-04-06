import "./login.scss";
import html from './login.html';

export const Login = {

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