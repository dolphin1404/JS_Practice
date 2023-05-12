/* 생성자 함수
첫글자는 대문자로
new 연산자를 사용해서 호출 
*/

function User(name, age) {
  //this = {};    new 함수 호출시 발생함
  this.name = name;
  this.age = age;
  this.SayName = function () {
    console.log(this.name);
  };
  // return this; new 함수 호출시 발생함
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

let user5 = new User("Han", 40);

user5.SayName(); //Han

// 생성자 함수 : 상품객체를 생성해보자
function Item(title, price) {
  // this = {};

  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`이 상품의 가격은 ${price}원 입니다.`);
  };

  // return this;
}

const item1 = new Item("새우깡", 3000);
const item2 = new Item("홈런볼", 4000);
const item3 = new Item("아까이", 5000);
console.log(item1, item2, item3);

item3.showPrice();
