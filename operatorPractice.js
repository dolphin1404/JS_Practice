/*
  조건부 연산자 '?'
  let result = condition ? value1 : value2
  평가 대상인 condition이 참이면 value1이, 거짓이면 value2가 반환
*/
const age = 18;

let accessAllowed = age > 18 ? true : false;
// 동일하게 동작함
let accessAllowed2 = age > 18; //애초 비교연산자는 true와 false를 반환함

/* 다중 '?'
여러 개 연결하면 복수의 조건을 처리가능
*/

//let age = prompt("나이를 입력하세요.", 18);
let message =
  age < 3
    ? "안녕 아기야!"
    : age < 18
    ? "안녕!"
    : age < 100
    ? "환영합니다!"
    : "나이가 많으시거나 잘못 입력하셨네요.";

console.log(message);

// 연산자 우선순위 규칙에 따라, 비교 연산 age > 18이 먼저 실행됨
// (조건문을 괄호로 감쌀 필요가 없습니다.)

if ("0") {
  console.log(
    '비어 있는 문자열을 제외한 모든 문자열은 논리 평가 시 true를 반환합니다. 문자 "0"은 비어 있지 않은 문자열입니다.'
  );
}

/* nullish 병합 연산자
nullish 병합 연산자 ?? 를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어있는' 변수를 찾을 수 있습니다.
만약 a ?? b 의 평가 결과는.
a 가 null도 아니고 undefined도 아니면 a
그 외의 경우는 b.
*/

x = a !== null && a !== undefined ? a : b;
