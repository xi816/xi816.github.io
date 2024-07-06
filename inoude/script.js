let piz = 0;
let da = 0;

function syska() {
  da = piz;
  piz = (piz + 1) % 4;
  console.log(piz);
  console.log(da);
  document.getElementById("pro-tb"+da).style.display = "none";
  document.getElementById("pro-tb"+piz).style.display = "flex";
}

function syska0() {
  da = piz;
  piz = piz-1;
  if (piz == -1) {
    piz = 3;
  }
  console.log(piz);
  console.log(da);
  document.getElementById("pro-tb"+da).style.display = "none";
  document.getElementById("pro-tb"+piz).style.display = "flex";
}

