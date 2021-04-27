
$(function(){
  //header 
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

//gnb logo스크롤 애니메이션
$(".gnb a, .logo a").click(function(){
  var target= $(this).attr("href");
  var targetPos=$(target).offset().top;
  $("html,body").stop().animate({scrollTop:targetPos-100},1000);
  return false;
 });

 //web 스크롤 애니메이션
$(".tab-menu a").click(function(){
  var target= $(this).attr("href");
  var targetPos=$(target).offset().top;
  $("html,body").stop().animate({scrollTop:targetPos-100},1000);
  return false;
 });

  // 넘버 fadeInTop 이벤트
  $(window).scroll(function(){
    var _h= $(window).scrollTop();
    console.log(_h);
if((_h>=0)&&(_h<1500)){
  $(".num_left01").stop().animate({top:-250, opacity:1},500);
  }else if((_h>=1500)&&(_h<2500)){
    $(".num_right02").stop().animate({top:-250, opacity:1},500);
  }else if((_h>=2500)&&(_h<3300)){
    $(".num_left03").stop().animate({top:-250, opacity:1},500);
  }else{
    $(".num_right04").stop().animate({top:-250, opacity:1},500);
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
// var target;
// var ct=0;

// $(".prev").css({opacity:"0.1"});
//   $(".next").click(function(){
//    target=$(this).parent().prev().find(".illust li");
//     ct--;
//     if(ct<=-5){ct=-5;
//               $(this).css({opacity:"0.2"});
//               $(this).prev().css({opacity:"1"});
//              }
//     leftmovie(target)
//   });

//   $(".prev").click(function(){
//    target=$(this).parent().prev().find(".illust li");
//     ct++;

//     if(ct>=0){ct=0; 
//               $(this).css({opacity:"0.2"});
//                $(this).next().css({opacity:"1"});
//             }
//     leftmovie(target)
//   });

// function leftmovie(target){
//  var tl= 752*ct;
//  $(target).stop().animate({left:tl});
// }
var current=0;
var l;
 var m;
$(".prev").click(function(){//이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 젤 앞으로 배치
   target=$(this).parent().prev().find(".illust");
   m=$(target).width()-$(target).find("li").width();
     l=$(target).position().left;
     if(l>= 0){
             $(".illust").css({left:0});
             return false;
             }
   $(target).animate({left:"+=752px"},"slow");
    
});

$(".next").click(function(){//다음 이미지가 슬라이드된후 젤앞의 이미지를 갤러리안의 젤 마지막으로 배치
   target=$(this).parent().prev().find(".illust");
   m=$(target).width()-$(target).find("li").width();
     l=$(target).position().left;
     if(l<= -m){
             $(target).css({left:-m});
             return false;
             }
   $(target).animate({left:"-=752px"},"slow");

});


//갤러리 자동 슬라이드
var x=0;
var s= -1;
var move = setInterval(motion,2);

function motion(){
x=x+s;
if(x<-2280){x=0;}//2280px이 끝나갈때 x의 left값을 다시 0으로
if(x>0){x=-2280} //위와 반대 상황
$(".gallery-area").css({left:x});
};

$(".gall_next").click(function(){
  s=-1;
motion();
});
$(".gall_prev").click(function(){
  s=1;
  motion();
});

$(".list li").mouseover(function(){
 clearInterval(move); //갤러리 마우스 올려놓았을때 멈춤
});
$(".list li").mouseout(function(){
  move=setInterval(motion,2);
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
