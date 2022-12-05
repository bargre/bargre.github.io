
$(function () {

  //모바일 메뉴 닫기
  $(".btn-menu-close").click(function () {
    $(".nav").removeClass("active");
  });
  //모바일 메뉴 열기
  $(".menu-area").click(function () {
    $(".nav").addClass("active");
  });

  //section 2 이미지 스크롤 이벤트
  //header scroll -> index만 적용

  $(window).scroll(function () {
    AOS.init();
    const doc = $(document).scrollTop();
    if ($("body").hasClass("main")) {

      if (doc > 100) {
        $(".header").addClass("scroll");
        $(".header").removeClass("top");
      } else {
        $(".header").removeClass("scroll");
        $(".header").addClass("top");
      }

      //section2 img motion
      const img = $(".img-box").offset().top - 700;

      if (doc > img) {
        $(".img-box").addClass("active");
      } else {
        $(".img-box").removeClass("active");
      }
    } else {
      //sub header scroll
      if (doc > 0) {
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    }

    if(doc > 200){
      $(".top-button-area").show();
    } else {
      $(".top-button-area").hide();
    }
  });//scroll


  // * works tab
  figureBlock();
  $(".filter-links li a").click(function () {

    figureNone();

    if ($(this).hasClass("link-all")) {
      $(".filter-links li a").removeClass("active");
      figureBlock();
      $(".link-all").addClass("active");
    } else if ($(this).hasClass("link-web")) {
      $(".filter-links li a").removeClass("active");
      $(".filter-sections .web").addClass("view");
      $(this).addClass("active");
    } else if ($(this).hasClass("link-app")) {
      $(".filter-links li a").removeClass("active");
      $(".filter-sections .app").addClass("view");
      $(this).addClass("active");
    } else if ($(this).hasClass("link-ecom")) {
      $(".filter-links li a").removeClass("active");
      $(".filter-sections .ecommerce").addClass("view");
      $(this).addClass("active");
    } else if ($(this).hasClass("link-etc")) {
      $(".filter-links li a").removeClass("active");
      $(".filter-sections .etc").addClass("view");
      $(this).addClass("active");
    }

    return false;
  });

  function figureBlock() {
    $(".filter-sections figure").addClass("view");
  }
  function figureNone() {
    $(".filter-sections figure").removeClass("view");
  }

  //  work - 업무소개
    $(".work-info").click(function(){
      $(this).toggleClass("active");
    });

    //마지막 섹션 패딩탑 값 조절
    const lastBoxPrev = $("#lastBox").prev();
    if(lastBoxPrev.hasClass("gray")=== false){
      $("#lastBox").addClass("last");
    }

}); //end