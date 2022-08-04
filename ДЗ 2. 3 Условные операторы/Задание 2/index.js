// 2) Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)

const variable = parseInt(prompt("Enter a 6-digit number"));

let second_part_var = variable % 1000;
let first_part_var = (variable - second_part_var) / 1000;
let second_part_var_reversed = (second_part_var % 10 * 100) + ( second_part_var % 100 -  second_part_var % 10) + (second_part_var - (second_part_var % 100))/100;

if (first_part_var == second_part_var_reversed) {
    console.log("The number is a palindrom")
}
else {
    console.log("The number is not a palindrom")
}
