function pickNumber() {

    const researchNumArr = makeNumArr(1, 45);

    
    // 조작할 문서 객체 선택
    const liEls = document.querySelectorAll("li");
    liEls.forEach(function (el, i){
        el.textContent = researchNumArr[i];
    })

}
function makeNumArr(min, max) {
    const arr = [];

    while (arr.length < 6){
        const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(arr.includes(randNumber) == false){
            arr.push(randNumber);
        }else{
            continue;
        }
    }
    arr.sort((a, b) => a-b);
    return arr;
}