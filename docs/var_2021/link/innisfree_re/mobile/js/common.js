$(function(){
$(".gnb_icon").click(function(){ //적용안됨
  $(".gnb").stop().animate({left:0},200);
   $(".overlay").css({display:"block"},200);
  return false;
});
$(".icon_close").click(function(){
    $(".gnb").stop().animate({left:"-100%"},200);
    $(".overlay").css({display:"none"},200);
  return false;
});

//gnb-lnb
$(".tit").click(function(){
  if($(this).hasClass("on")==false){
    $(".tit").removeClass("on");
  $(this).addClass("on");
  $(".lnb").slideUp(200);
  $(this).next().slideDown(200);
}else{
  $(".tit").removeClass("on");
  $(".lnb").slideUp(200);
}
});

$(".quick_menu_list li").click(function(){
  if($(this).hasClass("on")==false){
    $(".quick_menu_list li").removeClass("on");
  $(this).addClass("on");
}else{
  $(".quick_menu_list li").removeClass("on");
}

});

});
