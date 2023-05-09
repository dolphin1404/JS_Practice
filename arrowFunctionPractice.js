/*
  함수 표현식 및 화살표 함수

  
  함수 선언문 : 어디서든 호출가능 <자유롭게 사용가능해서 이걸 쓰자>
  순차적으로 진행하고 즉시 결과를 반환하는 언어를 인터프리터 언어라 함
  호이스팅 : 함수 자체 코드가 밑에 있더라도 호출 가능범위는 넓은 것
  
  함수 표현식 : 코드에 도달하면 생성
  let sayHell0 = function(){  // 함수를 생성 이후부터 사용가능
    console.log('Hello');
  }


  화살표 함수 (arrow function) : 함수 표현식보다 단순하고 간결하게
*/
let add = (num1, num2) => {
  return num1 + num2;
}


let add3 = (num1, num2) => num1 + num2; // 표현식은 num1 + num2;

/* 위 화살표 함수는 아래 함수의 축약 버전
  let add3 = function(num1, num2) {
    return a + b;
  }
*/

let double = n => n * 2;
// let double = function(n){return n * 2}와 거의 동일

console.log(double(2)); // 4


// 인수가 하나도 없을 때 괄호를 비워놓아도 된다. 그러나 괄호는 생략불가
let sayHi = () => console.log("안녕하세요!");
sayHi();
// 중괄호와 함께 작성: (...args) => { body } – 본문이 여러 줄로 구성되었다면 중괄호를 사용해야 합니다. 다만, 이 경우는 반드시 return 지시자를 사용해 반환 값을 명기해 주어야 합니다.

let sum = (a, b ) => {
  let result = a + b;
  return result;  // 중괄호를 사용했다면, 반드시 return 지시자를 통해 결과값 반환.
}

let ask = (question, yes, no) => {
  if (question == 1) yes();
  else no();
};

ask(
  "1",
  () => console.log("동의하셨습니다"),
  () => console.log("취소 버튼을 누르혔습니다.")
);

console.log("-------------------------");

let showError = () => {
  console.log("error");
};

showError();

const sayBye = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
};

sayBye("kyu");

const plus = (num1, num2) => num1 + num2;