console.log("suka bljatj");

function ddInput() {
  var ddl = document.getElementById("language");  
  var ind = ddl.options[ddl.selectedIndex].text;  

  console.log(ind);
  if (ind == "наваборћавȧ -- brg") {
    window.location = "../brg-wiki/index.html";
  }
  else if (ind == "русский -- ru") {
    window.location = "../ru-wiki/index.html";
  }
  else if (ind == "english -- en") {
    window.location = "../en-wiki/index.html";
  }
}
