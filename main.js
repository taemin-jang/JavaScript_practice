// 1. 함수 선언문 
//함수 선언문에는 세미콜론 안 붙힘
//표현식에만 붙임

function printName(){
    console.log('철수');

}

printName();

// 2. 함수 표현식

const printHello = function(){
    console.log('hello');
};

printHello();

// 3. new Function
const printNumber = new Function("console.log('new Function')");
printNumber();


// 4. => 함수
const printR = () => {
    console.log("영희");

};
printR();