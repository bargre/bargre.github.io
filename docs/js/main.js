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


    //일러스트 팝업
$(".btn-close").click(function(){
  $(".popup").removeClass("on");
  $(".btn-close").removeClass("on");
  $("body").css({"overflow":"auto"});
 });

 $(".illust-list li").click(function(ev){
  var i = $(this).index();  
  console.log(i); 
  $("#popup-1 li").eq(i).addClass("on");
  $(".btn-close").addClass("on");
  $("body").css({"overflow":"hidden"});
 });


$(".btn-go-img").click(function(ev){
  var index = $(this).parents("li").index();  
  console.log(index);
$("#popup-2 li").eq(index).addClass("on");
$(".btn-close").addClass("on");
$("body").css({"overflow":"hidden"});
});

}); //end
