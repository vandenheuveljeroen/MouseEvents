
var hoverMe=document.getElementsByClassName('hoverMe')
for (var i = 0; i < hoverMe.length; i++) {
  hoverMe[i].addEventListener("mouseenter", function(){event.target.style.opacity="0";});
}
function Reset(){
  for (var i = 0; i < hoverMe.length; i++) {
    hoverMe[i].style.opacity="1";
  }
}
let button= document.getElementById("reset");
button.addEventListener("click",Reset)


var x = document.getElementById("x-axis")
var y = document.getElementById("y-axis")
var html = document.querySelector("html")
html.addEventListener("mousemove",xy)

function xy(event){
x.innerHTML = "x-axis :" + event.pageX.toString()
y.innerHTML = "y-axis :" + event.pageY.toString()
}
