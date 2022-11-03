
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

    $(window).scroll(function () {
        AOS.init();

        const doc = $(document).scrollTop();
        const img = $(".img-box").offset().top - 500;
        //console.log(doc);  

        if (doc > img) {
            $(".img-box").addClass("active");
        } else {
            $(".img-box").removeClass("active");
        }

        if (doc > 0) {
            $(".header").addClass("scroll");
        } else {
            $(".header").removeClass("scroll");
        }
    });//scroll


}); //end