const btnPopClose = document.querySelector(".btn-close");
const popup = document.querySelector(".popup");
const detail_1 = document.querySelector("#detail_1");


//팝업 닫기
btnPopClose.addEventListener("click" , popClose);
function popClose(){
  popup.style.display = "none";
}

//팝업 열기
detail_1.addEventListener("click" , popOpen);
function popOpen(){
  popup.style.display = "block";
}

