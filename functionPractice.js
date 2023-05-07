/* 
함수(function)      23/05/07
한번에 한작업에 집중
읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
showError // 에러를 보여줌
getName // 이름을 얻어옴
creatUserData // 유저데이터 생성
checkLogin // 로그인 여부 체크
*/

function setNewClass() {
  console.log("-------------------------");
}

// 매개변수가 없는 함수(Return과 console.log 차이)

function sayBye() {
  console.log("Bye");
}

sayBye();

function sayBye2() {
  return "Bye1";
}

console.log(sayBye2());
setNewClass();
// 백틱 활용 함수, 매개변수가 있는 함수
const country = "Korea";
const city = "Seoul";
console.log("내가 사는 곳은 ${country}"); // 내가 사는 곳은 ${country}
console.log(`내가 사는 곳은 ${country}`); // 내가 사는 곳은 Korea

console.log(`내가 사는 곳은 ${country}, ${city} 입니다`); //내가 사는 곳은 Korea, Seoul 입니다

console.log("---------------------------------");
console.log(`내가 사는 나라는 ${country}, \n내가 사는 도시는 ${city} 입니다`);

function sayHello(name) {
  let msg = `Hello`; // <- msg는 지역변수 (반대는 전역변수)
  if (name) {
    //msg = `Hello, $(name)`;
    msg += ", " + name;
    //msg += `, $(name)`; (백팁)
  }
  console.log(msg);
}

sayHello("Kyu");
setNewClass();
// ----------------
// 전역 변수와 지역 변수, 지역 변수를 쓰는 습관이 필요
let msg = "welcome";
console.log(msg);

function sayHello2(name) {
  let msg = "Hello";
  console.log(msg + " " + name);
}

sayHello2("Mike");
console.log(msg);
setNewClass();
//OR

function sayDie(name = "friend") {
  // set default value
  //let newName = name || 'friend';
  //let msg = `Hello, ${newName}`;
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayDie();
sayDie("Jane");
setNewClass();
// return 으로 값 반환

function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result);

function showError() {
  console.log("에러가 발생했습니다.");
  return; // 반환 값은 undefined
  console.log("이 코드는 절대 실행되지 않습니다.");
}

const result2 = showError();
console.log(result2);
