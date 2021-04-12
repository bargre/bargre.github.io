
$(function(){
$(window).scroll(function(){
  var _ht= $(window).scrollTop();
  if(_ht>0){
  $(".header").addClass("fixed"),
    $(".header li a").addClass("active")
  }else{
  $(".header").removeClass("fixed"),
    $(".header li a").removeClass("active")
  }

});


// 입사지원 이벤트 
$(".btn-join a").click(function(){
 $("#num").addClass("active");
});
 

//타블랫 pc 마우스 이벤트

$(".content").mouseover(function(){
  var h =$(this).find(".mask img").height();
  var ht = h-335;
  $(this).find(".mask img").stop().animate({top:-ht},3000);
});
$(".content").mouseleave(function(){
  $(this).find(".mask img").stop().animate({top:0});
});


//모바일 마우스 이벤트

$(".content-mobile").mouseover(function(){
  var h =$(this).find(".mobile-mask img").height();
  var ht = h-275;
  $(this).find(".mobile-mask img").stop().animate({top:-ht},1500);
});
$(".content-mobile").mouseleave(function(){
  $(this).find(".mobile-mask img").stop().animate({top:0});
});

// 프로젝트 팝업
$(".project-con").click(function(){
  $(this).next().show();
  $("body").css({overflow:"hidden"});
});

$(".close").click(function(){
  $(".over-pop").hide();
    $("body").css({overflow:"auto"});
return false;
});

 // pop-스픽나우
var target;
var ct=0;
$(".prev").css({opacity:"0.1"});
  $(".next").click(function(){
   target=$(this).parent().prev().find(".illust li");
    ct--;

    if(ct<=-5){ct=-5;
              $(this).css({opacity:"0.2"});
              $(".prev").css({opacity:"1"});
             }
    leftmovie(target)
  });

  $(".prev").click(function(){
   target=$(this).parent().prev().find(".illust li");
    ct++;

    if(ct>=0){ct=0; $(this).css({opacity:"0.2"});$(".next").css({opacity:"1"});
            }
    leftmovie(target)
  });


function leftmovie(target){
 var tl= 752*ct;
 $(target).stop().animate({left:tl});
}

//갤러리 슬라이드
var imgWid = $(".list").width();
var wid = $(window).width();
var leftWid = imgWid-wid;
$(".gall-next").click(function(){
  $(".list").stop().animate({left:-leftWid},1000);
});

//갤러리 팝업
$(".list li").click(function(){
  $(this).children(".over-pop").show();
  $("body").css({overflow:"hidden"});
});

$(".close").click(function(){
  $(".over-pop").hide();
    $("body").css({overflow:"auto"});
return false;
});

$(".gall-prev").click(function(){
  $(".list").stop().animate({left:0},1000);
});


});//end
