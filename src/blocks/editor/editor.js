import "./editor.scss";

export const v_editor = {
  currentTheme : "solarized_light",

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
    const self = this;

    this.boxes.forEach( function(box) {
      let boxType = box.getAttribute('id'),
        editor = null;
        try{
          boxType = boxType.split('--')[1];
          editor = ace.edit("editor--" + boxType);
          editor.setTheme("ace/theme/" + self.currentTheme);
          editor.session.setMode("ace/mode/" + boxType);
        } catch(e) { console.warn(e) }; 
    });
  },

  start : function () {
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
    // this.createBoxes();

    this.start();

    document.querySelector("#measures").addEventListener("click", () => {
      this.getBoxesMeasures();
    })


    /*
    *
        QUICK DRAFT FOR VANILHA DRAG !!!
        let body = document.querySelector("body");

        function mouseMove(e) {

          console.log(e);
        }

        function mouseUp() {

          console.log("body");
          body.removeEventListener("mousemove", mouseMove);
          body.removeEventListener("mouseup", mouseUp);
        }
        

        document.querySelector(".divider").addEventListener("mousedown", (e) => {
          
          body.addEventListener("mousemove", mouseMove);
          body.addEventListener("mouseup", mouseUp);
        });
     *
     */
    
    

  }
}

