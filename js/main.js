// var 잘 안씀| let| const
// html안에 이름 부르기 : querySelector("#circle") querySelectorAll("article"): 클라스 이름이 많은 경우

// 아이디가 circle인 요소를 찾아서 변수로 저장
const circle = document.querySelector("#circle");

// 태그명이 article인 요소를 찾아 변수로 저장
const article = circle.querySelectorAll("article");

//반복 할 경우, 반복문: for(초기값:0, 조건식:범위, 증감식:+1씩 더해짐-예전 버전이고, el을 씀: 1~10 하나의 개개 요소 let:예약어)
//article에 마우스 올리면 부모 #circle의 animation-play-sate값을 "padsed"로 변경
//article의 전체 개수 (face1~8)만큼 반복 돌면서 마우스 올릴때 mouseemter할때"padsed"로 변경 마우스 땔 때 mouseleave할때  "running"이벤트 실행코드 연결
//function(){실행 코드} :예전 버전 ->현재: (e) =>{}

for (let el of article) {
  el.addEventListener("mouseenter", (e) => {
    circle.style.animationPlayState = "paused";
  });
}
for (let el of article) {
  el.addEventListener("mouseleave", (e) => {
    circle.style.animationPlayState = "running";
  });
}
