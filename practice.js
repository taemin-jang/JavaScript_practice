// 문제1) 전화 번호 형식으로 해당 숫자의 문자열을 반환하는 10 개의 정수 배열 (0과 9 사이)을 허용하는 함수를 작성하십시오.
// 예:
// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // =>는 "(123) 456-7890"을 반환합니다.
// 반환되는 형식(포맷)을 위에서 제시한 형태처럼 정확하게 일치시켜주세요.

// function createPhoneNumber(numbers){
//     let str, str1, str2;

//    for(let i = 0; i<3; i++){
//        let str = numbers[i];
       
//    }
//    for(let i = 4; i<7; i++){
//     let str1 = numbers[i];
//     }
//     for(let i = 7; i<=10; i++){
//         let str2 = numbers[i];
//     }
//    // console.log(`(${str}) ${str1}-${str2}`);
//     console.log(`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`);
    
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// 문제2) 전달하는 문자열의 역순을 취하는 함수 reverseMessage를 구현해주세요.
// "Good Bye" -> "eyB dooG"
// "Hello" -> "olleH"

// function reverseMessage(strings){
//     let str ="";
//     for(let i = strings.length-1; i>=0; i--){
//         str = str.concat(strings[i]);
//     }
//     console.log(str);
// }

// reverseMessage("Good Bye");
// reverseMessage("Hello");


// 문제3) 함수에 배열로 숫자를 전달해서 가장 작은 2개의 숫자의 합을 반환하는 함수를 만들어보세요
// function sumTwoSmallestNumbers(numbers) {  
//     //Code here
//   }
//   const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
//   const sum2 =sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0) 

function sumTwoSmallestNumbers(numbers) {
    let number = numbers.sort();  
    return number[0] + number[1];
  }
  const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
  const sum2 =sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0) 

  console.log(sum);
  console.log(sum2);

// 문제4) 어떤 숫자 n을 전달받아 n이 양의 정수 x의 제곱근인지 판별하고 제곱근이라면 
// 양의 정수 x + 1 의 제곱근을 반환하는 함수를 만들려고합니다. 만약 전달된 임의의 수 n이 어떠한 수의 제곱근이 아니라면 -1을 반환하게 하세요.

// 이때 임의의 정수는 1 이상 50000000 이하라고 가정합니다.

// > n 121 -> return 144 
// > n 9 -> return 16
// > n 10 -> return -1

// 만약 121을 전달하면 121은 11의 제곱근이므로(11 * 11 = 121) 양의 정수 x는 11이고, (11 + 1)의 제곱이므로 144를 반환합니다.(12 * 12 = 144)
// 만약 함수에 9를 전달하면 9는 3의 제곱근이므로(3 * 3 = 9) 양의 정수 x는 3입니다. 따라서 3 + 1의 제곱근을 반환하면 되므로 16(4 * 4)을 반환하면 됩니다.
// 만약 함수에 10을 전달하면 10은 그 어떠한 수의 제곱근도 아니므로 -1을 반환합니다.

// function isPow(n){
// 	//code here
// }

// const result = isPow(121); // 144
// const result2 = isPow(10); // -1
// const result3 = isPow(9); // 16


// function isPow(n){

//     let isSqrt;
//     let ispow;
//     if(Number.isInteger(Math.sqrt(n))){
//         isSqrt = Math.sqrt(n)+1;
//         ispow = Math.pow(isSqrt,2);
//         return ispow;
//     }else{
//         return -1;
//     }
// }

// const result = isPow(121); // 144
// const result2 = isPow(10); // -1
// const result3 = isPow(9); // 16

// console.log(result);
// console.log(result2);
// console.log(result3);
