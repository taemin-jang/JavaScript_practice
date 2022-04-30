function register(complete, error){
    console.log('회원가입 프로세스 시작');

    setTimeout(function (){
        if(false){
            complete();
        }else{
            error();
        }
    }, 3000);
}

function complete() {
    console.log('회원가입 성공');
}

function error(){
    console.log('회원가입 실패');
}

register(complete, error);