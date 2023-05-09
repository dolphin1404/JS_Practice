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

for (x in Mike3) {
  console.log(Mike[x]); // Mike['name'] -> Mike['age'] 로 가는 순서
}
