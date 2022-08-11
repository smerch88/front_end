// 1. Создать массив, длину и элементы которого задает пользователь (через

//     prompt) (повторяется промпт, пока пользователь не нажмет кэнсэл). Затем отсортировать массив по росту. Затем, удалить
    
//     элементы из массива со 2 по 4. По мере изменений выводить содержимое массива в консоль.



let flag = true;
let numbersSet = [];


while (flag){
    number = prompt();
    flag = (number == null) ? false : true;  
    if (flag === false){       // вынужден был сделать так потому что не работает Брейк в тернарном операторе
        break;
    }
    numbersSet.push(number);
    console.log(number);
}


console.log(`Debug message: Записанный массив с клавиатуры: ${numbersSet}`);


function compareNumeric(a, b) {  //функция для sort
    if (a > b) return 1;
    if (a == b) return 0; 
    if (a < b) return -1; 
   }

numbersSet.sort(compareNumeric);

console.log(`Debug message: Сортированный массив: ${numbersSet}`);

numbersSet.splice(1,3);

console.log(`Debug message: Удалены елементы с индексами от 1 до 3 включительно. Массив: ${numbersSet}`);

