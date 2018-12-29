$('.carousel').carousel({
    // interval: 4000
  })
/*导入头部和尾部*/
$(document).ready(function(){
    $("header").load("head.html",function(){
      $("#home").addClass("active");
    });
    $("footer").load("foot.html");
 });
 