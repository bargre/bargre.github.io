

//해더 스크롤 이벤트
const header = document.querySelector(".header");
const bg = document.querySelector(".bg-trans");

window.addEventListener('scroll', function(){

const windowTop = window.pageYOffset;

   if(windowTop > 100) {
        header.classList.add("shadow");
     bg.classList.add("scroll");

   } else {
     header.classList.remove("shadow");
     bg.classList.remove("scroll");
   }
});




//video player
const btnPlay = document.querySelector(".btn-play");
const cover = document.querySelector(".book-cover");
const btnStop = document.querySelector(".btn-stop");
const audioPlayer = document.querySelector(".audio-player");


function playPause() {
  if (btnPlay.style.display = "block") {
    btnPlay.style.display = "none"; //재생버튼 없애기
    audioPlayer.style.display = "block"; // 오디오 플레이어 보여주기
    cover.classList.add("play"); // 커버 모션
    cover.classList.add("recordPlay"); // 레코드판 모션
  }
}

btnStop.addEventListener("click", playToggle);

function playToggle() {
  btnStop.classList.toggle('btn-start'); //재생,멈춤 토글
  if (btnStop.classList.contains('btn-start')) {
    cover.classList.remove("recordPlay");
  } else {
    cover.classList.add("recordPlay");
  }
}

const btnLog = document.querySelector(".btn-log");
const logout = document.querySelector("#logout");

btnLog.addEventListener ("click" , logControl);

function logControl(){
if(logout.classList.contains("control")){
  logout.classList.remove("control");
} else {
  logout.classList.add("control");
}
}
//로그아웃




//end
