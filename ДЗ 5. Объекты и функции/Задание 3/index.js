// 3 Реализовать функцию generateKey(length, characters), которая возвращает набор случайных символов из набора characters длиной length

function generateKey(charNumber, characters){
    let key="";
    for(i=0; i<charNumber; i++){
    key += characters[Math.round(Math.random()*charNumber)];
    }
    return key;
}

const characters = "abcdefghklmop12345678";
const key = generateKey(17, characters);

 console.log(`Your pass is: ${key}`);