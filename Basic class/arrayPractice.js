/*
배열 : 순서가 있는 리스트
let students = ['철수', '영희' , ....];
index은 0 ~
console.log(students[0]); // 철수

배열의 특징
배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 한번에 포함할 수 있음
length : 배열의 길이 즉 요소의 개수
push() : 배열 끝에 추가
let days = ['a', 's']
days.push('c');

pop() :배열 끝 요소 제거

shift, unshift 배열 앞에 제거/추가

배열 쓰는 이유는 반복을 위해.

반복문 : for ... of
let days = ['월', '화', '수'];
for (let day of days){
  console.log(day)
}

*/

// array

let days = ["mon", "tue", "wed"];

days[1] = "화요일";

console.log(days.length);

days.push("thu");
console.log(days);
days.unshift("sun"); // 맨 앞에 추가
console.log(days);

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
console.log("-----");
for (let day of days) {
  // day는 그저 배열의 요소를 나타냄 아무 이름으로 하든 상관 무 = let x of days = let y of days
  console.log(day);
}
