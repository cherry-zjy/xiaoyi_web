$(document).ready(function(){
    $("header").load("head.html",function(){
        $("#service").addClass("active");
        $('header').css('position','unset')
      });
    $("footer").load("foot.html");
 });