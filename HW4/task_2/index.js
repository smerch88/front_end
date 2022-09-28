// 2. Дан массив
const numbersArray = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
const numbersArrayCopy = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
// Найти сумму положительных значений и количество положительных элементов.
let sumOfPositive;
// Найдите минимальный элемент массива и его порядковый номер.
let minElement;
// Найдите максимальный элемент массива и его порядковый номер.
let maxElement;
// Определить количество отрицательных элементов.
let numberOfNegative;
// Найти количество нечетных положительных элементов.
let numberOfPositiveOdds;
// Найти сумму четных положительных элементов.
let sumOfPositiveEvens;
// Найти произведение положительных элементов.
let multiplyPositive;
// Найти самый большой среди элементов массива, остальное обнулить.
let biggestElement;

let sortedArray;


function sortArrayMinToMax(array){     //сортировка от минимального до максимальбного
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0; 
        if (a < b) return -1; 
       }
    return array.sort(compareNumeric);   
}

function sumOfPositiveFunction(array){  //Сумма больше 0 
    let sum = 0;
    for(let i=0; i<array.length; i++){
        array[i] >= 0 ? sum+=array[i] : 0;
    }
    return sum;
}

function minElementFunction(array){     //Минимальное значение и его позиция
    let min = sortArrayMinToMax(array)[0];
    let position = numbersArrayCopy.indexOf(min);  //если искать по array, то всегда выдаст 0, не знаю в чем проблема
    return minPos = [min, position + 1];
}

function maxElementFunction(array){     //Максимальное значение и его позиция
    let max = sortArrayMinToMax(array)[array.length-1];
    let position = numbersArrayCopy.indexOf(max);
    return minPos = [max, position + 1];
}

function numberOfNegativeFunction(array){     //Определить количество отрицательных элементов
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        array[i] < 0 ? counter += 1 : counter;
    }
    return counter;
}

function numberOfPositiveOddsFunction(array){     // Найти количество нечетных положительных элементов.
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        array[i] > 0 && array[i]%2 != 0 ? counter += 1 : counter;
    }
    return counter;
}

function sumOfPositiveEvensFunction(array){     // Найти сумму четных положительных элементов.
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        array[i] >= 0 && array[i]%2 === 0 ? sum += array[i] : sum;
    }
    return sum;
}

function multiplyPositiveFunction(array){     // Найти произведение положительных элементов.
    let multiply = 1;
    for (let i = 0; i < array.length; i++){
        array[i] > 0 ? multiply *= array[i] : multiply;
    }
    return multiply;
}

function biggestElementFunction(array){     // Найти самый большой среди элементов массива, остальное обнулить.
    let maxElement = maxElementFunction(array)[0];
    let newArray =[];
    for (let i = 0; i < numbersArrayCopy.length; i++){   //Аналогичная проблема - если использовать просто аррей, то будет сортированны массив
        if (numbersArrayCopy[i] !== maxElement){
            newArray.push(0);
        }
        else{
            newArray.push(maxElement); 
        };
    }
    return newArray;
}


sortedArray = sortArrayMinToMax(numbersArray);
console.log(`Sorted array: ${sortedArray}`);

sumOfPositive = sumOfPositiveFunction(numbersArray); 
console.log(`Sum of positive values: ${sumOfPositive}`);

minElement = minElementFunction(numbersArray);
console.log(`Minimal value and its number: ${minElement}`);

maxElement = maxElementFunction(numbersArray);
console.log(`Maximal value and its number: ${maxElement}`);

numberOfNegative = numberOfNegativeFunction(numbersArray);
console.log(`Number of negative values: ${numberOfNegative}`);

numberOfPositiveOdds = numberOfPositiveOddsFunction(numbersArray);
console.log(`Number of positive odds: ${numberOfPositiveOdds}`);

sumOfPositiveEvens = sumOfPositiveEvensFunction(numbersArray); 
console.log(`Sum of positive evens: ${sumOfPositiveEvens}`);

multiplyPositive = BigInt(multiplyPositiveFunction(numbersArray));
console.log(`Multiply of positive values: ${multiplyPositive}`);

biggestElement = biggestElementFunction(numbersArray);
console.log(`Biggest value: ${biggestElement}`);
