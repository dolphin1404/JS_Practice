let n = "name";
let a = "age";

const user = {
  [n]: "Mike",
  [a]: 30,
  [1 + 4]: 5,
};

console.log(user);

function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj("나이", 33);

console.log(obj);

const userA = {
  name: "Mike",
  age: 30,
};

const result = Object.entries(userA);
console.log(result);

let arr = [
  ["mon", "월"],
  ["tue", "화"],
];

const result1 = Object.fromEntries(arr);
console.log(result1);
