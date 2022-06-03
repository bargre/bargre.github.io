$(document).ready(function(){

  const width =$(document).width();

//1140 미만일때 사이트 오픈 클릭 이벤트
  $(window).on(" load resize" , function (){
 
    if(width <= 1140){
      $(".design-list-area li").eq(0).click(function(e){
        e.stopPropagation();
        window.open("link/innisfree_re/mobile/index.html", "a", "width=400, height=600, left=200, top=50");
        });
      $(".design-list-area li").eq(1).click(function(e){
        e.stopPropagation();
        window.open("link/audi_re/index.html", "a", "width=400, height=600, left=200, top=50");
      });
      $(".design-list-area li").eq(2).click(function(e){
        e.stopPropagation();
        window.open("link/MyPlant/index.html", "a", "width=375, height=650, left=200, top=50");
      });
    } else {
      $(".design-list-area li").eq(0).off("click");
      $(".design-list-area li").eq(1).off("click");
      $(".design-list-area li").eq(3).off("click");
    }


    //퍼블리싱화면 모바일웹 토글

         

  }); //resize


  $("#menu1").click(function(){      
    $("#menuList1").toggleClass("on");   
  });

  $("#menu2").click(function(){      
    $("#menuList2").toggleClass("on");   
  });


  //web 스크롤 애니메이션
 $(".gnb-area li a").click(function(){
   var target= $(this).attr("href");
   var targetPos=$(target).offset().top;
   $("html,body").stop().animate({scrollTop:targetPos-140},700);
     if(width <= 500){
         $("html,body").stop().animate({scrollTop:targetPos-120},700);
     }
   return false;
  });

//이니스프리 사이트 오픈
  $("#inniPcOpen").click(function(){
    window.open("link/innisfree_re/index.html");
  });
//이니스프리 모바일 사이트 오픈
  $("#inniMobileOpen").click(function(){
    window.open("link/innisfree_re/mobile/index.html", "a", "width=375, height=650, left=200, top=50");
  });
//아우디 사이트 오픈
  $("#audiPcOpen").click(function(){
    window.open("link/audi_re/index.html");
  });
//아우디 모바일 사이트 오픈
  $("#audiMobileOpen").click(function(){
    window.open("link/audi_re/index.html", "a", "width=375, height=650, left=200, top=50");
  });
  //반려식물 모바일 사이트 오픈
    $("#plantMobileOpen").click(function(){
      window.open("link/MyPlant/index.html", "a", "width=375, height=650, left=200, top=50");
    });

$(".btn-close").click(function(){
 $(".popup").css({"display":"none"});
});

$("#detail_1").click(function(){
  $("#popup_1").css({"display":"block"});
});
$("#detail_2").click(function(){
  $("#popup_2").css({"display":"block"});
});
$("#detail_3").click(function(){
  $("#popup_3").css({"display":"block"});
});
$("#detail_4").click(function(){
  $("#popup_4").css({"display":"block"});
});

}); //end
