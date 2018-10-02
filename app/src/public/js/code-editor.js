function setEditArea(e){
  var activeAreas = document.querySelectorAll(".active_area"),
      totalActiveAreas = activeAreas.length,
      recommendWidth = (window.innerWidth) / totalActiveAreas;
      console.log(activeAreas);

      for(var i = 0; i < totalActiveAreas;i++){
        activeAreas[i].style.width = recommendWidth - 8;
      }
}

function runCode(){
  var htmlCode = $("#html_textarea").val();
  var cssCode  = $("#css_textarea").val();
  var jsCode   = $("#js_textarea").val();
  
  $("#result_area iframe").contents()
                          .find("head")
                          .append(
                                '<style>' + cssCode + '</style>'                                 
                           )
                           .end()
                           .find("body")
                           .html(htmlCode);

   document.getElementById("iframe").contentWindow.eval(jsCode);                        
}

window.onload = function(){


  //ALTERAR A APARÊNCIA DE CADA ITEM CLICADO//
  var options = document.querySelectorAll(".edit_btn");

    for(var i = 0; i < options.length ;i++){
      options[i].addEventListener("click",function(e){
          //TOGGLE -> PARA OS ITEM NA BARRRA DE NAVEGAÇÃO//
          this.classList.toggle("selected");
          ///TOGGLE -> PARA AS ÁREAS DE EDIÇÃO//
          document.getElementById(e.target.innerHTML.toLowerCase() +"_area").classList.toggle("active_area");
          console.log(document.getElementById(e.target.innerHTML.toLowerCase() +"_area"));
          //CHAMA A FUNÇÃO QUE IRÁ DETERMINAR O COMPRIMENTO IDEAL DE CADA ÁREA//
          setEditArea(e) ;
      });
    }//ALTERAR A APARÊNCIA DE CADA ITEM CLICADO//

    $("#exec_btn").on("click",runCode);
    
};
