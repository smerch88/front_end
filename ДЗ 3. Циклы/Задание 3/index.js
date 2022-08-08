// Дано целое число N (ввести через prompt). Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N. Если N не является числом, то вывести ошибку.

const number = parseInt(prompt("Enter a number:"));

if (isNaN(number)){
    console.log("Error input is not a number")
}
else {    
    let i = 1;
    let j = 100;

    while ((i**2<=  number) && j>0) {
        console.log("Square of ", i,"=",i**2, "so it satisfies requirements.")
        i += 1;
        j -=1;
    }
}
