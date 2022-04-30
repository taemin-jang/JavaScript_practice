function randomNumber(){
    const arr = [];

    while (arr.length < 6){
        const randNumber = getRandomIntInclusive(1, 45);
        if(arr.includes(randNumber) == false){
            arr.push(randNumber);
        }

        
    }
    return arr;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }

  console.log(randomNumber());