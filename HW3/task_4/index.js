//  Дано целое число (ввести через prompt). Выяснить, является ли оно простым (простым называется число, больше 1, не имеющих других делителей кроме 1 и себя).

const number = parseInt(prompt("Enter a number:"));
let counter = 0;


for (let j = 0; j <= (Math.ceil(number / 2)); j++) {
    if ((number % j) == 0) {
        console.log("Debug: number % j = ", number % j)
        counter += 1;
    }
}


console.log("Debug: Math.ceil(number/2) ", Math.ceil(number / 2))
console.log("Debug: counter = ", counter)


if (counter == 1 && number != 1) {
    console.log("Number is Prime")
}
else {
    console.log("Number is not Prime")
}