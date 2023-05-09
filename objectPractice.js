// object 객체

const superman = {
  name: "clark",
  age: 33,
};

// 접근
superman.name; // 'clark'
superman["age"]; // 33

// 추가
superman.gender = "male";
superman["hairColor"] = "black";

// 삭제
delete superman.hairColor;

//단축 프로퍼티
const name = "clark";
const age = 33;

const supergirl = {
  name, // name : name
  age, // age : age
  gender: "male",
};

// 프로퍼티 존재 여부 확인
superman.birthDay; //undefined

"birthDay" in supergirl; // false
"age" in supergirl; // true

// for ... in 반복문
for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}

console.log("================");

const batman = {
  name: "clark",
  age: 30,
};

console.log(batman.name);
console.log(batman["age"]);

batman.hair = "black";
batman["hobby"] = "football";
delete batman.age;

console.log(batman);

console.log("--------------------");

function makeObject(name, age) {
  return {
    name, //name: name, 이름이 같아서 사용가능
    age, //age: age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike); // age가 마이크 안에 존재하는지
console.log("birthday" in Mike); //
console.log("=-===========");

// 객체 in

function isAdult(user) {
  if (
    !("age" in user) || // user에 age가 없거나
    user.age < 20 //20살 미만이거나
  ) {
    return false;
  }
  return true;
}

const Mike1 = {
  name: "Mike1",
  age: 30,
};

const Jane = {
  name: "Jane",
};

console.log(isAdult(Jane));

// 객체 for ... in

const Mike3 = {
  name: "Mike3",
  age: 30,
};

for (key in Mike3) {
  //console.log(key); // Mike3가 가지고 있는 property
  console.log(Mike[key]); // Mike['name'] -> Mike['age'] 로 가는 순서
}
console.log("------new--------");

/* object - method, this
method : 객체 프로퍼티로 할당 된 함수
this : 실행하는 시점 즉 런타임때 결정
그러나 화살표함수는 일반 함수와는 달리 자신만의 this를 가지지 않음, 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴
만약 사용하면 전역객체로 사용됨 // 브라우저 환경 : window, Node.js : global
*/

let boy = {
  name: "Mike",
  showName: function () {
    console.log(boy.name);
  },
};

let man = boy; // 오브젝트를 새로만든 것이 아닌 접근을 늘린 것
boy.showName(); //Mike
man.showName();
man.name = "Tom";
boy.showName(); //Tom
man.showName();

console.log(boy.name);

// method

let boy1 = {
  name: "Mike",
  sayThis: function () {
    console.log(this);
  },
};

boy1.sayThis();