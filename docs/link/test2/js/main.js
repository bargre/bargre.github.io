$(function() {

  $(window).on('load resize', function() {

    var windowWidth = $(window).width();
    console.log(windowWidth);

    if (windowWidth > 1080) {
      gnb();
    } else if (windowWidth < 1080) {
      MobileGnb();
    }

    function gnb() {
      if (windowWidth >= 1080) {
        $("ul.gnb > li > p").off("click"); //mobile 이벤트 초기화

        $("ul.gnb").mouseenter(function() { //pc mouse hover
          $(".headerContainer").stop().animate({
            height: "320px"
          });
        });
        $("ul.gnb").mouseleave(function() {
          $(".headerContainer").stop().animate({
            height: "88px"
          });
        });

        $("ul.lnb > li").click(function() {  //클릭하면 선택되는 효과.
          $('ul.lnb > li').removeClass("on");
          $('ul.gnb > li').removeClass("on");
          $(this).addClass("on");
          $(this).parents("li").addClass("on");
        });
      }
    }

    function MobileGnb() {
      if (windowWidth < 1080) {
        $("ul.gnb").off("mouseenter"); //pc 이벤트 초기화
        $("ul.gnb").off("mouseleave"); //pc 이벤트 초기화
        $("ul.lnb > li").off("click"); //pc 이벤트 초기화

        $("ul.gnb > li").click(function() { //클릭하면 display block/none
          $("ul.gnb > li").removeClass("on");
          $(this).addClass("on");
        });
      }
    }
  });

//메뉴버튼 열기
$(".menu-btn").click(function(){
  $(".back-bg").css({display:"block"});
    $(".gnbWrap").stop().animate({right:"0px"});
});
//매뉴버튼 닫기
 $(".close-nav-btn").click(function(){
   $(".back-bg").css({display:"none"});
     $(".gnbWrap").stop().animate({right:"-328px"});
 });

 // 닫기 이벤트 - 닫기버튼 클래스 : "close-btn" / 닫히는 영역 클래스 :"close"
  $(".close-btn").click(function(){
    $(".close").css({display:"none"});
  });
}); //end
