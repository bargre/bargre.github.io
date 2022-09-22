//해더 스크롤 이벤트

const bg = document.querySelector(".bg-trans");
window.addEventListener('scroll', function(){

const windowTop = window.pageYOffset;

   if(windowTop > 100) {
     bg.classList.add("scroll");
   } else {
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

  //팝업 닫기 이벤트
   const popup = document.querySelector("#popup");
  const popClose = document.querySelector(".btn-close");
  const popStop = document.querySelector(".btn-stop");

  popClose.addEventListener("click" , popCloseHandler);
  popStop.addEventListener("click" , popCloseHandler);

  function popCloseHandler(){
    popup.style.display = "none";
  }
