// 매개변수가 없는 함수(Return과 console.log 차이)

function sayBye() {
  console.log("Bye");
}

sayBye();

function sayBye2() {
  return "Bye1";
}

console.log(sayBye2());

// 백틱 활용 함수
const country = 'Korea';
const city = 'Seoul';
console.log('내가 사는 곳은 ${country}'); // 내가 사는 곳은 ${country}
console.log(`내가 사는 곳은 ${country}`); // 내가 사는 곳은 Korea

console.log(`내가 사는 곳은 ${country}, ${city} 입니다`); //내가 사는 곳은 Korea, Seoul 입니다

console.log('---------------------------------');
console.log(`내가 사는 나라는 ${country}, \n내가 사는 도시는 ${city} 입니다`); 