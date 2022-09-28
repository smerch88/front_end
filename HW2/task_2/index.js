// 2) Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)

const variable = parseInt(prompt("Enter a 6-digit number"));

// получаем вторую половину числа, это остаток от деления на 1000
let second_part_var = variable % 1000;
// получаем первую часть числа, это всё число минус 2 часть разделить на 1000 
let first_part_var = (variable - second_part_var) / 1000;
// переворачиваем 2 часть числа | последняя цифра * 100 | остаток от деления на 100 - остаток от деления на 10 | 2 часть изначального числа - остаток от деления на 100 и убрать нули 
let second_part_var_reversed = (second_part_var % 10 * 100) + ( second_part_var % 100 -  second_part_var % 10) + (second_part_var - (second_part_var % 100))/100; 

if (first_part_var == second_part_var_reversed) {
    console.log("The number is a palindrom")
}
else {
    console.log("The number is not a palindrom")
}
