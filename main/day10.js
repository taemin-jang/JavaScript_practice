const arr1 = [10, 20];
const arr2 = [...arr1];     // [arr1[0], arr1[1]]; 과 똑같음

arr1[0] = 100;

console.log(arr1);
console.log(arr2);

const arr3 = [10, 20];
const arr4 = [30, 40];

const combine = [arr3[0], arr3[1], arr4[0], arr4[1]];
const combine2 = arr3.concat(arr4);
const combine3 = [...arr3, ...arr4];

console.log(combine);
console.log(combine2);
console.log(combine3);
