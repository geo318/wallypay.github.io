var elts = document.getElementsByClassName("drop");
var els = document.getElementsByClassName("drop_down");
for(let i = 0; i < elts.length; i++) {
  let elt = elts[i];
  let el = els[i];
  elt.addEventListener("mouseover", function() { addClass(el) });  
  elt.addEventListener("mouseleave", function() { removeClass(el) });  
}

var nav = document.getElementById("mnav");
var menu = document.getElementById("menu");
var cls = document.getElementById("close");
nav.addEventListener("click", function() {addRemove(menu)});
cls.addEventListener("click", function() {removeClass(menu)});
function addRemove(x) {
  if(x.style.display === "none") {
    addClass(x);
  } else {
    removeClass(x);
  }
}

  function addClass(el) {
  el.classList.add("down");
  el.style.display = "block";
  setTimeout(function(){el.style.opacity = 1},10);
}

function removeClass(el) {
  el.classList.remove("down");
  el.style.opacity = 0;
  setTimeout(function(){el.style.display = "none"}, 100);
}