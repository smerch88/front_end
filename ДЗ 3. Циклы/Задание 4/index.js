//  Дано целое число (ввести через prompt). Выяснить, является ли оно простым (простым называется число, больше 1, не имеющих других делителей кроме 1 и себя).

let number_var = parseInt(prompt("Enter a number:"));
let i = 0;


    for( let j = 0; j <= (Math.ceil(number_var/2)); j++){
        if ((number_var % j) == 0){
            console.log("number_var % j = ",number_var % j)
            i += 1;
        }
    }


console.log("Math.ceil(number_var/2) ", Math.ceil(number_var/2))
console.log("i = ", i)


if (i==1){
    console.log("Number is Prime")
}
else{
    console.log("Number is not Prime")
}