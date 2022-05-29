$(document).ready(function(){

//1140 미만일때 사이트 오픈 클릭 이벤트
  $(window).on(" load resize" , function (){
    const width =$(document).width();
 

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
});
