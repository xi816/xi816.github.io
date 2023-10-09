let colorscheme = "light";
let els = ["csh", "part1", "part2"];

document.getElementById("btn1").onclick = function() {
  colorscheme = "dark";
  document.body.style.background = "#303030";
  document.getElementsByTagName("h1")[0].style.color = "#DDD";

  for (var i = 0; i < els.length; i++) {
    console.log(els[i]);
    document.getElementById(els[i]).style.color = "#DDD";
  }
  document.getElementById("tier1").style.color = "#FFF";
  document.getElementById("tier2t5").style.color = "#E10";
}

document.getElementById("btn2").onclick = function () {
  colorscheme = "light";
  document.body.style.background = "#FFF";
  document.getElementsByTagName("h1")[0].style.color = "#000";

  for (var i = 0; i < els.length; i++) {
    console.log(els[i]);
    document.getElementById(els[i]).style.color = "#000";
  }
  document.getElementById("tier1").style.color = "#000";
  document.getElementById("tier2t3").style.color = "#F00";
}
