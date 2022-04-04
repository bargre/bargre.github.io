$(function() {

  //resize header
  $(window).resize(function() {

    const windowWidth = $(window).width();
    // console.log(windowWidth);
    if (windowWidth <= 1080) {
      $(".gnb-tit").click(function() {
        $(this).parent(".gnb-list").toggleClass("on");
      });
    }

    $(".gnb-area").mouseenter(function() { //pc mouse hover
      $(".headerContainer").addClass("on");
      $(".search-area").addClass("on");
    });

    $(".gnb-area").mouseleave(function() {
      $(".headerContainer").removeClass("on");
      $(".search-area").removeClass("on");
    });

  }).resize(); //resize

  //메뉴버튼 열기
  $(".menu-btn").click(function() {
    $(".back-bg").css({
      display: "block"
    });
    $(".gnbWrap").stop().animate({
      left: "0px"
    }, 200);
    $(".search-area").addClass("on"); //지점찾기 z-index
  });
  //매뉴버튼 닫기
  $(".back-bg").click(function() {
    $(".back-bg").css({
      display: "none"
    });
    $(".gnbWrap").stop().animate({
      left: "-400px"
    }, 200);
    $(".gnb-list").removeClass("on"); //리스트 전체 닫기
    $(".search-area").removeClass("on"); //지점찾기 z-index
  });

  // 닫기 이벤트 - 닫기버튼 클래스 : "close-btn" / 닫히는 영역 클래스 :"close"
  $(".close-btn").click(function() {
    $(".close").css({
      display: "none"
    });
  });

  //header 스크롤 이벤트
  $(window).scroll(function() {
    var _ht = $(window).scrollTop();
    if (_ht > 0) {
      $(".headerContainer").addClass("scroll");
    } else {
      $(".headerContainer").removeClass("scroll");
    }
  });

  //지점찾기
  $(".btn-agency").click(function() {
    $(".search-agency-area").toggleClass("on");
    $(this).toggleClass("on");
  });

}); //end
