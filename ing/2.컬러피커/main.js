/*
  색상 컬러 클릭시 body 태그의 배경 색상을 
  선택한 컬러로 변경해주세요.
*/

const radioEls = document.querySelectorAll("input[type = 'radio']");
radioEls.forEach(function(el){
  el.addEventListener('click', function(){
    document.body.style.backgroundColor = this.value;
  })
})
