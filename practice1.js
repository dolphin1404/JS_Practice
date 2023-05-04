// const userName = prompt("이름을 입력하세요.");
// alert("환영합니다, " + userName + "님");

// const age = prompt("나이", 20);
const age = 20;
if (age === 20) {
  console.log("Good");
}

const age1 = 23;
const age2 = 29;

let index = 24;
while (index > age1) {
  console.log("High");
  index -= 1;
}

do {
  console.log("과연 누가 높을까요?");
} while (index > age2);

const cityName = "Suji";

switch (cityName) {
  case "Osaka":
    console.log("오사카");
  case "Tokyo":
    console.log("도쿄");
  case "Seoul":
    console.log("서울");
  case "Suji":
    console.log("정답입니다.");
}

function sayHello(name) {
  console.log("Hello,  ${name}");
}

sayHello("규");
