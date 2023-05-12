/* COmputed property 계산된 프로퍼티
 */

let a = "age";
const user = {
  name: "Mike",
  [a]: 30, // age : 30
}; //computed property

const user1 = {
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello",
};
console.log(user1); //{ '5': 5, '안녕하세요': 'Hello' }

// object method
// Object.assign() : 객체 복제
// const cloneUser = user; // 참조값만 복사하는 것
const newUser = Object.assign({}, user);
// {} + {name : 'Mike', age : 30} =
const newUser1 = Object.assign({ gender: "male" }, user);
console.log(newUser1);
console.log("------------------");
// gender를 포함한 총 3개의 프로퍼티를 갖게 됨
// 만약 키가 같다면 새로운 것으로 덮어쓰게 됨
// Object.assign({ name : 'Tom'  }, user); >> name : 'Tom' / Mike가 아닌 Tom으로 덮어쓰게 됨

const userx = {
  name: "Mike",
};
const info1 = {
  age: 30,
};
const info2 = {
  gender: "male",
};
Object.assign(userx, info1, info2); // userx에 붙여지게 됨
console.log(userx);

// Object.keys() : 키 배열 반환

const keysUser = {
  name: "Mike",
  age: 30,
  gender: "male",
};

Object.keys(keysUser); // ["name", "age", "gender"]

// Object.values() : 값 배열 반환
Object.values(keysUser); // ["Mike", 30, "male"]

// Object.entries() : 키/값 배열 반환
Object.entries(keysUser);

// Object.fromEntries() : 키/값 배열을 객체로
const arr = [
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"],
];
console.log(arr);
console.log("-=------------");
Object.fromEntries(arr);
console.log(arr);
//-----------------------------
