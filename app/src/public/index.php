<html lang="en">
  <head>
    <title>Code Editor</title>
    <meta name="viewport" content="initial-scale=1, user-scalable=no, maximum-scale=1, width=device-width">
    <meta charset="utf-8">
    <?php require_once("../resources/templates/favicon.php");?>

    <link rel="stylesheet" href="./styles/bootstrap.min.css">
    <link rel="stylesheet" href="./styles/code-editor.css">
  </head>


    <body>        
        <main id="" class="">
			<header  class="header">
				<nav id="app-navbar" class="app-navbar">
					<div class="app-navbar__wrapper">
						<div id="logo_area" class="logo">
							<span class="version-display">Beta - <i class="version-display__icon">v1.1</i></span>
						</div>
					
						<div class="lang-selectors">
							<form>
								<ul id="edit_options" class="lang-selectors__list">
                  <input id="html" class="lang-selectors__input" type="checkbox" name="html" value="html" >
                  <label for="html" class="lang-selectors__label">html</label>
                  <input id="css" class="lang-selectors__input" type="checkbox" name="html" value="css" >
                  <label for="css" class="lang-selectors__label">css</label>
                  <input id="js" class="lang-selectors__input" type="checkbox" name="html" value="js" >
                  <label for="js" class="lang-selectors__label">js</label>


									<!-- <li id="html_btn" class="html_btn edit_btn selected lang-selectors__section">HTML</li>
									<li id="css_btn" class="css_btn edit_btn selected lang-selectors__section">CSS</li>
									<li id="js_btn" class="js_btn edit_btn selected lang-selectors__section">JS</li> -->
								</ul>
							</form>
						</div>
						
						<button id="exec_btn" class="exec_btn lang-selectors__run-btn">Run</button>
					</div>
				</nav>
			</header>
            

        <section id="main_container" class="main_container">

          <div id="result_area" class="result_area">
                <span class="area_label">result</span>
                <iframe id="iframe"></iframe>
          </div>

          <div id="html_area" class="edit_area active_area html_area">
            <span class="area_label">HTML</span>
            <textarea id="html_textarea" class="textarea"><div>&#10;&#9;<p>Texto de um parágrafo</p>&#10;</div>
            </textarea>
          </div>

            <div id="css_area" class="edit_area active_area css_area">
            <span class="area_label">CSS</span>
            <textarea id="css_textarea" class="textarea">p {&#10;&#9;color:red;&#10;}</textarea>
          </div>



          <div id="js_area" class="edit_area active_area js_area">
            <span class="area_label">JS</span>
            <textarea id="js_textarea" class="textarea">function myFunc(args){&#10;&#9; alert("test");&#10;}
              document.getElementsByTagName("p")[0].style.color = "green";
            </textarea>
          </div> 

        </section>

      </main>
      
    <script type="text/javascript" src="js/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="js/code-editor.js"></script>
  </body>
</html>
