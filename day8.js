// 로또 번호 6개 만들기
// 중복된 숫자 없이 배열로 출력

function randomNumber() {
    
    let rand = [];
  
    let i = 0;
    let count = 0;
    // 먼저 rand[0]의 값을 받아준다.
    rand.push(Number.parseInt(Math.random() * 44 + 1));
    while(true){
        if(rand.indexOf(rand[i]) == i){ // indexOf 값이 i와 같을 경우 중복이 아닌경우다
            if(count > 0){  // count는 i가 5일때만 받으므로 count가 1개 이상이면서 중복이 아닌경우면 6개가 다 중복이 아니므로 끝내준다.
                break;
            }
            rand.push(Number.parseInt(Math.random() * 44 + 1));
            i++;    
        }else{  // indexOf 값이 i와 다른경우 이전에 값이 들어와있기 때문에 i와 다르게 나온 것이다. 그러므로 중복이므로 마지막 값을 빼주고 다시 넣어준다.
            rand.pop();
            rand.push(Number.parseInt(Math.random() * 44 + 1));           
        }
        
        if(i==5){   // 마지막 값이 중복인지 다시 확인
            if(rand.indexOf(rand[5]) != 5){   // 마지막 값이 중복인 경우
                // console.log("바꾸기 전 : " + rand);
                rand.pop();
                rand.push(Number.parseInt(Math.random() * 44 + 1));
                // count ++;
                // console.log("count : " + count);
                // console.log("바꾼 후 : " + rand);
                continue;
            }else{     // 중복이 아닌 경우
                break;
            }
        } 
    }
    return rand;
}
const result = randomNumber();
console.log(result);