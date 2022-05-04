const obj1 = { name: "철수" };
const obj2 = { name: obj1.name }; // const obj2 = { ...obj1 }; 똑같음

obj1.name = "영희";

console.log(obj1);
console.log(obj2);

const obj3 = { name: "철수" };
const obj4 = { age: 24 };
const combine = { ...obj3, ...obj4 };
console.log(combine);

console.log(obj1);
