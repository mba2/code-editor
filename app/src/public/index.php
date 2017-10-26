<html lang="en">

<head>
  <title>Code Editor</title>
  <meta name="viewport" content="initial-scale=1, user-scalable=no, maximum-scale=1, width=device-width">
  <meta charset="utf-8">
  <?php //require_once("../resources/templates/favicon.php");?>
  
  <link rel="stylesheet" href="./styles/bootstrap.min.css">
  <link rel="stylesheet" href="./styles/code-editor.css">
</head>


<body>
  <!-- HEADER -->
  <?php //require_once("../resources/templates/header.php");?>
  
  <main id="" class="">
    <?php require_once("../resources/templates/user-menu.php");?>

    <!-- <section id="main_container" class="main_container">
      <div id="result_area" class="result_area">
        <span class="area_label">result</span>
        <iframe id="iframe"></iframe>
      </div>
      
      <div id="html_area" class="edit_area active_area html_area">
        <span class="area_label">HTML</span>
        <textarea id="html_textarea" class="textarea">
          <div>&#10;&#9;
            <p>Texto de um parágrafo</p>&#10;
          </div>
        </textarea>
      </div>
      
      <div id="css_area" class="edit_area active_area css_area">
        <span class="area_label">CSS</span>
        <textarea id="css_textarea" class="textarea">p {&#10;&#9;color:red;&#10;}</textarea>
      </div>
      
      <div id="js_area" class="edit_area active_area js_area">
        <span class="area_label">JS</span>
        <textarea id="js_textarea" class="textarea">function myFunc(args){&#10;&#9; alert("test");&#10;} document.getElementsByTagName("p")[0].style.color = "green";
          </textarea>
        </div>
    </section> -->
  </main>
      
    <!-- FOOTER -->
    <?php //require_once("../resources/templates/footer.php");?>

    <script type="text/javascript" src="js/vendors/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="js/code-editor.js"></script>
    <script src="http://localhost:35729/livereload.js"></script>
  </body>
    
</html>