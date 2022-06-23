$(function(){
var lastScrollTop = 0;
// header 스크롤 이벤트
  $(window).scroll(function(event){
   var top = $(this).scrollTop();
   var mgHeight = $(".main").outerHeight(true) - $(".main").outerHeight();
   var ht = mgHeight / 2;

   //console.log(ht);

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
   if(top > ht){
     $(".main").addClass("scroll");
   }else {
     $(".main").removeClass("scroll");
    }

  }); //scroll event


}); //end
