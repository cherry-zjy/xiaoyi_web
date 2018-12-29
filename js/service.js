$(document).ready(function(){
    $("header").load("head.html",function(){
        $("#service").addClass("active");
      });
    $("footer").load("foot.html");
 });