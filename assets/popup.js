$(function () {
    "use strict";
    $(".show").fadeIn();
    /**
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    $("span").click(function () {
        window.location.href = "index.html";
    });
    **/
});


var images = [
   "assets/images/popup1.png", 
   "assets/images/popup2.png", 
   "assets/images/popup3.png"
];
var num = 0;


function next() {
  var slider = document.getElementById("slider");
  num++;
  if ( num > images.length-1 ) {
    $(".show").fadeOut();
  }
  slider.src = images[num];
  document.getElementById("btnPrev").style.visibility="visible";
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if ( num == 0 ) {
    document.getElementById("btnPrev").style.visibility="hidden";
  }
  if ( num != images.length-1 ) {
    document.getElementById("btnNext").style.visibility="visible";
  }
  if ( num < 0 ) {
    num = images.length-1;
  }
  slider.src = images[num];
}