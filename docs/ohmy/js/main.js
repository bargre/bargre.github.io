
//해더 스크롤 이벤트
const main = document.querySelector("main");
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
$(window).scroll(function (event) {
  var st = $(this).scrollTop();



  //100이상일때 그림자 생김
  // 탭 있는 header 영역 그림자 
if(main.contains(wBox)){

    // 상단 탭 고정일때 tab-contents 의 패딩값 조절
    if(wBox.offsetTop < 1) {
      wBox.classList.add("top");  
      } else  {   
        wBox.classList.remove("top");  
      }
  
  if (st < 100) {
    wBox.classList.remove("shadow");
    
  } else {
    wBox.classList.add("shadow");  

    //스크롤 업 할때
  if (st > lastScrollTop) {
    header.classList.add("display");  
  
    if (bg != null) {
      bg.classList.add("scroll");
    }
    if(main.contains(wBox)){
      wBox.classList.add("sticky");
    }
    if(main.contains(tabButton)){
      tabButton.classList.add("sticky");
    }

  } 
  //스크롤 다운
  else {
   header.classList.remove("display");
    if (bg != null) {
      bg.classList.remove("scroll");
    }
    if(main.contains(wBox)){
      wBox.classList.remove("sticky");
    }
    if(main.contains(tabButton)){
      tabButton.classList.remove("sticky");
    }
  }
  }
}
//탭 없는 header 영역 그림자 
if(main.contains(wBox) != true){
  if (st < 100) {
    header.classList.remove("shadow");  
  } else {
    header.classList.add("shadow");
      
        //스크롤 업 할때
  if (st > lastScrollTop) {
    header.classList.add("display");  

  } 
  //스크롤 다운
  else {
    header.classList.remove("display");
  }

  }
}



  lastScrollTop = st;

});




//로그아웃 팝업

const btnLog = document.querySelector(".btn-log");
const logout = document.querySelector("#logout");
if (btnLog != null) {
  btnLog.addEventListener("click", function () {
    logout.classList.toggle("control");
  });
}



//video player
const btnPlay = document.querySelector(".btn-play");
const cover = document.querySelector(".book-cover");
const btnStop = document.querySelector(".btn-stop");
const audioPlayer = document.querySelector(".audio-player");


function playPause() {
  if (btnPlay != null) {
    if (btnPlay.style.display = "block") {
      btnPlay.style.display = "none"; //재생버튼 없애기
      audioPlayer.style.display = "block"; // 오디오 플레이어 보여주기
      cover.classList.add("play"); // 커버 모션
      cover.classList.add("recordPlay"); // 레코드판 모션
    }
  }
}

if (btnStop != null) {
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
