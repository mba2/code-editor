import "./empty.scss";
import html from './empty.html';

export const Empty = {

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