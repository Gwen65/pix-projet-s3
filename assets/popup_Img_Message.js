$(function () {
    "use strict";
    
    $(".message img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
        document.write($src);
    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});