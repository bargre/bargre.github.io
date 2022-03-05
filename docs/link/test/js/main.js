$(function(){

  //공통 팝업 닫기
  $(".btn-close, .btn-close-pop").click(function(){
    $(".pop-bg").css({display:"none"});
    $(".popup").stop().animate({bottom:"-100%"},200);
  });

//비밀번호 눈 끄고 켜기.
  $(".btn-password").click(function(){
    $(".icon-eye").toggleClass("on");

  if( $(".icon-eye").hasClass("on")){
    $(".btn-password").prev().attr({"type": "text"});
  } else {
  $(".btn-password").prev().attr({"type": "password"});
  }
  });

//search - like choose
$(".like-box").click(function(){
  $(this).toggleClass("choose");
});

//nav메뉴 버튼
// $(".nav-list li").click(function(){
//   $(".nav-list li").removeClass("active");
//   $(this).toggleClass("active");
// });

//search - like choose
$(".user-like").click(function(){
  $(this).toggleClass("active");
});

//message-close
$(".btn-message-close").click(function(){
  $(".message, .result").css({display:"none"});
});


});//end



//팝업창 열기
function popupOpen(){
  $("#popup-bg").css({display:"block"});
  $("#popup").stop().animate({bottom:"0%"},200);
};
function popupOpen1(){
  $("#popup-bg-1").css({display:"block"});
  $("#popup-1").stop().animate({bottom:"0%"},200);
};
function popupOpen2(){
  $("#popup-bg-2").css({display:"block"});
  $("#popup-2").stop().animate({bottom:"0%"},200);
};


//경고 팝업창 열기
function alertPopupOpen(){
  $("#alert-pop-bg").css({display:"block"});
  $(".alert-content-area").css({display:"block"});
};

//경고 팝업창 닫기
function alertPopupClose(){
  $(".pop-bg").css({display:"none"});
  $(".alert-content-area").css({display:"none"});
};
