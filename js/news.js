$(document).ready(function(){
    $("header").load("head.html",function(){
        $("#news").addClass("active");
      });
    $("footer").load("foot.html");
 });

 var width = $(".news-card > img").width()
 $(".news-card > img").css('height',width/2)

 function go(){
    window.location.href = "newdetail.html"
 }