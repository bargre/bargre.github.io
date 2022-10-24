
//해더 스크롤 이벤트
const header = document.querySelector(".header");
const bg = document.querySelector(".bg-trans");
const header_2 = document.querySelector(".header_2");
const wBox = document.querySelector(".w-box");
const tabButton = document.querySelector(".tab-button");
// window.addEventListener('scroll', function(){

// const windowTop = window.pageYOffset;

//    if(windowTop > 100) {
//     header.classList.add("shadow");
//     header_2.classList.add("display");
//     if (bg != null){
//      bg.classList.add("scroll");
//     }
//    } else {
//      header.classList.remove("shadow");
//      header_2.classList.remove("display");
//      if (bg != null){
//      bg.classList.remove("scroll");
//     }
//    }
// });

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st < 10){
    wBox.classList.add("shadow");
   }else {
    wBox.classList.remove("shadow");
   }
   if (st > lastScrollTop){
    header.classList.add("shadow");
    wBox.classList.add("sticky");
    tabButton.classList.add("sticky");
    if (bg != null){
           bg.classList.add("scroll");
          }
   } else {
    header.classList.remove("shadow");
    wBox.classList.remove("sticky");
    tabButton.classList.remove("sticky");
    if (bg != null){
           bg.classList.remove("scroll");
          }
   }
   lastScrollTop = st;
   console.log(st);
})

//로그아웃 팝업

const btnLog = document.querySelector(".btn-log");
const logout = document.querySelector("#logout");
if (btnLog != null){
  btnLog.addEventListener ("click" , function(){
    logout.classList.toggle("control");
  });
}



//video player
const btnPlay = document.querySelector(".btn-play");
const cover = document.querySelector(".book-cover");
const btnStop = document.querySelector(".btn-stop");
const audioPlayer = document.querySelector(".audio-player");


function playPause() {
  if (btnPlay != null){
  if (btnPlay.style.display = "block") {
    btnPlay.style.display = "none"; //재생버튼 없애기
    audioPlayer.style.display = "block"; // 오디오 플레이어 보여주기
    cover.classList.add("play"); // 커버 모션
    cover.classList.add("recordPlay"); // 레코드판 모션
  }
}
}

if (btnStop != null){
btnStop.addEventListener("click", playToggle);

function playToggle() {
  btnStop.classList.toggle('btn-start'); //재생,멈춤 토글
  if (btnStop.classList.contains('btn-start')) {
    cover.classList.remove("recordPlay");
  } else {
    cover.classList.add("recordPlay");
  }
}
}






//end
