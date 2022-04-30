// function question01(num1, num2){
//     for(let i = num1; i <= num2; i++){
//         console.log(i);
//     }
// }

// question01(1, 4);

// function question02(num1, num2){
//     const arr = [];
//     for(let i = num1; i<=num2; i++){
//         arr.push(i);
//     }
//     console.log(arr);
// }

// question02(1, 4)

const email = 'afdf@dsafs';
const pw = '12345';

function login(email, pw){

    if(!email.match('@')){      // 이메일 @ 있는지 체크 -> 올바른 형식이 아닙니다.  includes() 메소드 이용해도 됨 !email.includes('@') 또는 indexOf() 메소드 이용 email.indexOf('@') == -1
        console.log('올바른 이메일 주소 형식이 아닙니다.');
    }else if(pw.length < 5){    //pw 5자리 미만이면-> pw는 최소 5자리 이상이여야 합니다.
        console.log('비밀번호가 5자리 미만입니다. 최소 5자리 이상 입력해주세요.');
    }else{   // 로그인 조건이 맞으면
        console.log('로그인 되었습니다.');
    }

    // if(email.match('@') && pw.length >= 5){     // 로그인 조건이 맞으면
    //     console.log('로그인 되었습니다.');
    // }else if(!email.match('@') && pw.length >= 5){    // 이메일 @ 있는지 체크 -> 올바른 형식이 아닙니다.
    //     console.log('올바른 이메일 주소 형식이 아닙니다.');
    // }else if(pw.length < 5 && email.match('@')){    //pw 5자리 미만이면-> pw는 최소 5자리 이상이여야 합니다.
    //     console.log('비밀번호가 5자리 미만입니다. 최소 5자리 이상 입력해주세요.');
    // }else{      // 형식이 둘 다 안맞을 경우
    //     console.log('올바른 이메일 주소 형식이 아니고, 비밀번호가 5자리 미만입니다.');
    // }

}

login(email, pw);