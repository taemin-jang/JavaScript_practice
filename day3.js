function gugudan(num) {
    for(let i = 1; i<=9; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
gugudan();

function gugudan1(num, num2) {
    console.log(num, num2);
}
gugudan1();

// 매개변수의 개수를 모를 때
function sum(...numbers){
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        result += numbers[i];
    }
    console.log(result);
}
sum(10, 20, 30, 40);

function sum1(){
    console.log(arguments[0] + arguments[1]);
}
sum1(10, 20);

// return 사용
function sum(num1, num2){
    const result = num1 + num2;
    return result;
}
const result =  sum(10, 20);
console.log(result);