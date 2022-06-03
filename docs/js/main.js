const m_1 = document.querySelector("#mobile_1").innerText;
const m_2 = document.querySelector("#mobile_2").innerText;
const m_3 = document.querySelector("#mobile_3").innerText;
const m_4 = document.querySelector("#mobile_4").innerText;

const mobileTit = document.querySelector("#mobileTit");
const con = document.querySelector("#con");
const date = document.querySelector("#date");
const mobileText = document.querySelector("#mobileText");
const mobileImg = document.querySelector("#mobileImg");

const web_1 = document.querySelector("#web_1").innerText;
const web_2 = document.querySelector("#web_2").innerText;
const web_3 = document.querySelector("#web_3").innerText;

const webTit = document.querySelector("#webTit");
const webCon = document.querySelector("#webCon");
const WebDate = document.querySelector("#WebDate");
const webText = document.querySelector("#webText");


// function creatText(text) {
// const textBox = document.querySelector(".work-img-text");
// const h6 = document.createElement("h6");
// const div = document.createElement("div");
// const con = document.createElement("p");
// const date = document.createElement("p");
// const mobileText = document.createElement("p");

// h6.className = "item-title";
// h6.innerText = m_1;

// div.className = "item-text";

// textBox.appendChild(h6);
// textBox.appendChild(div);

// con.id = "con";
// date.id = "date";
// mobileText.id = "mobileText";

// div.appendChild(con);
// div.appendChild(date);
// div.appendChild(mobileText);

// return h6;
// }





function textChange1() {
  mobileTit.innerText = m_1;
  con.innerHTML = `기여도 : 퍼블리싱 100%`;
  date.innerHTML = `작업기간 : 1달`;
  mobileText.innerHTML = `보험 가입설계와 모바일 청약 업무 지원 앱`;
  mobileImg.src = "images/m_1.jpg";
  mobileImg.alt ="로봇설계매니저앱 이미지" ;
  
}

function textChange2() {
  mobileTit.innerText = m_2;
  con.innerHTML = `기여도 : 퍼블리싱 100%`;
  date.innerHTML = `작업기간 : 2주`;
  mobileText.innerHTML = `자동차보험 비교견적과 청약 의뢰 지원 앱`;
  mobileImg.src = "images/m_2.jpg";
  mobileImg.alt ="자동차보험 비교견적앱 이미지";
}

function textChange3() {
  mobileTit.innerText = m_3;
  con.innerHTML = `기여도 : 퍼블리싱 100%`;
  date.innerHTML = `작업기간 : 1달`;
  mobileText.innerHTML = `단체보험에 가입한 회사 임직원 및 가족에게 스마트폰을 통해 간편하게 보장내용 확인 및 보험금 청구 할수 있는 앱`;
  mobileImg.src = "images/m_3.jpg";
  mobileImg.alt ="LK보험금청구앱 이미지";
}

function textChange4() {
  mobileTit.innerText = m_4;
  con.innerHTML = `기여도 : 퍼블리싱 100%`;
  date.innerHTML = `작업기간 : 3주`;
  mobileText.innerHTML = `음악 스트리밍 및 SNS 지원 앱`;
  mobileImg.src = "images/m_4.jpg";
  mobileImg.alt ="Plusma앱 이미지";
}

function webTextChange1() {
  webTit.innerText = web_1;
  webCon.innerHTML = `기여도 : 퍼블리싱 100% (bootstrap)`;
  WebDate.innerHTML = `작업기간 : 10일`;
  webText.innerHTML = `KB라이프파트너스 홈페이지`;
  webImg.src = "images/w_1.jpg";
  webImg.alt ="KB라이프파트너스 홈페이지";
}

function webTextChange2() {
  webTit.innerText = web_2;
  webCon.innerHTML = `기여도 : 퍼블리싱 100% (bootstrap)`;
  WebDate.innerHTML = `작업기간 : 10일`;
  webText.innerHTML = `이스퀘어 홈페이지`;
  webImg.src = "images/w_2.jpg";
  webImg.alt ="이스퀘어 홈페이지";
}

function webTextChange3() {
  webTit.innerText = web_3;
  webCon.innerHTML = `기여도 : 퍼블리싱 100% (bootstrap)`;
  WebDate.innerHTML = `작업기간 : 5일`;
  webText.innerHTML = `인슈플래닛 홈페이지`;
  webImg.src = "images/w_3.jpg";
  webImg.alt ="인슈플래닛 홈페이지";
}