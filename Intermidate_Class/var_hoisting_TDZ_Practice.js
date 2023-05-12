/* var는 한번 선언된 변를 다시 선언할 수 있다.
 var는 선언하기 전에 사용할 수 있다.
 호이스팅은 코드가 실제로 이동하진 않지만 최상위로 올라간 것 처럼 되는 것을 말함 : 스코프 내부 어디서든 변수 선언은 최상위에서 선언된 것 처럼 행동
-
 변수의 생성과정 1. 선언단계 2. 초기화단계 3. 할당관계
 var 1. 선언 및 초기화 단계 2. 할당관계   
 >> 함수 스코프 (function-scoped)
 함수 내에서 선언된 변수만 지역변수로
 ** 초기화: undefined를 할당 해주는 단계
 
 let 1. 선언 단계 2. 초기화 단계 3. 할당관계
 const 1. 선언 + 초기화 + 할당
 
 >> 블록 스코프 (block-scoped)
 모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효 및 외부에서 접근 불가 >> 즉 지역변수
 ex) 함수, if문, for, while, try/catch 문 등
*/

//Temporal Dead Zone

var name;
console.log(name); //undefined
name = "Mike"; // name이라는 변수 선언만 호이스팅된 것. 대신 값은 되지 않고 그 자리에 있음 // 할당은 현재 줄에서 된 것

let age = 30;

function showAge() {
  //TDZ Start
  console.log(age);
  //let age = 20;   //undefined
} //TDZ End

showAge();

function abc() {
  var aa = "12"; // 함수 내부에서 선언
}
console.log(aa); // Uncaught ReferenceError: aa is not defined

if (true) {
  var abc = "123"; // var로 선언하면 블록에 의한 범위 제한이 없음
}
console.log(abc); //123

if (true) {
  const abc = "123"; // const, let은 블록 스코프를 따름
}
console.log(abc); // ReferenceError: abc is not defined

function hello() {
  for (var i = 0; i < 12; i++) {}
  console.log(i); //접근가능
}

hello(); //12

function hello() {
  for (let i = 0; i < 12; i++) {}
  console.log(i);
}

hello(); //ReferenceError: i is not defined
