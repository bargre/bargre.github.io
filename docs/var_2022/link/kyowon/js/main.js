$(function(){

  //네비 클릭 이벤트
  
  $(".gnb-list li").click(function(){
      $(".gnb-list li").removeClass("active");
      $(this).addClass("active");
  });

});
