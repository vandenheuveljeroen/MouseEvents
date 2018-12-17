
var hoverMe=document.getElementsByClassName('Reset')
for (var i = 0; i < Reset.length; i++) {
  hoverMe[i].addEventListener("mouseenter", function(){event.target.style.opacity="0";});
}

var hoverMe=document.getElementsByClassName('Reset')
for (var i = 0; i < Reset.length; i++) {
  hoverMe[i].addEventListener("mouseLeave", function(){event.target.style.opacity="1";});
}
