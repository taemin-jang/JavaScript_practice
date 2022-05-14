document.forms[0].addEventListener('submit', function(e){       // 서버 전송 막기
    e.preventDefault();

    const idEl = document.forms[0].username;
    const idValue = idEl.value.trim();  //trim은 문자의 좌 우 공백을 없애줌

    if(idValue === ''){
        alert('아이디를 입력해주세요.');
        return;
    }

    const pwEl = document.forms[0].password;
    const pwValue = pwEl.value;

    if(pwValue === ''){
        alert('비밀번호를 입력해주세요.');
        return;
    }
    
    this.submit();
    
});