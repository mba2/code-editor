import "./editor.scss";

export const v_editor = {
  cacheElements : function() {
    this.boxes = [].slice.call(document.querySelectorAll(".editor__box"));
	},
  
  getBoxesMeasures : function() {
    let boxes = document.querySelectorAll(".editor-box") || null;
      if(boxes) {
        boxes.forEach( box => {
          console.log(window.getComputedStyle(box).width);
        });
      }
  },

  createBoxes : function() {
    console.log(this.boxes);

    this.boxes.forEach( box => {
      let boxType = box.getAttribute('id');
      console.log(boxType);
    });
  },

  start : function () {
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

  init : function() {
    this.cacheElements();
    this.createBoxes();

    this.start();

    document.querySelector("#measures").addEventListener("click", () => {
      this.getBoxesMeasures();
    })
  }
}