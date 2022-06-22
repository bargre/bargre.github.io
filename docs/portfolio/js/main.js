$(function(){
var lastScrollTop = 0;
// header 스크롤 이벤트
  $(window).scroll(function(event){
   var top = $(this).scrollTop();

    if(top > 0){
      $(".header").addClass("on");
    } else {
      $(".header").removeClass("on");
    }
//up down
    if(top > lastScrollTop){
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }
  lastScrollTop = top ;

// main border-radius

   if(top >= 300){
     $(".main").addClass("scroll");
   }else {
     $(".main").removeClass("scroll");
    }


  });//scroll Event


}); //end
