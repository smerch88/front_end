// 1) Дано трехзначное число. 
// Верно ли, что все цифры одинаковы? ‘333’
// Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’


const variable_1 = parseInt(prompt("Enter a 3-digit number"));
let first_digit_var;
let second_digit_var;
let third_digit_var;

third_digit_var = variable_1 % 10;
second_digit_var = ((variable_1 - third_digit_var) / 10) % 10;
first_digit_var = (variable_1 - variable_1 % 100) / 100;

console.log(first_digit_var, second_digit_var, third_digit_var)

if (first_digit_var == second_digit_var == third_digit_var) {    
    console.log("All digits of a number are equal.");
}
else if (first_digit_var == second_digit_var && first_digit_var != third_digit_var){
    console.log("First and second digits are equal.");
}
else if (first_digit_var == third_digit_var && first_digit_var != second_digit_var){
    console.log("First and third digits are equal.");
}
else if (second_digit_var == third_digit_var && first_digit_var != second_digit_var){
    console.log("Second and third digits are equal.");
}
else {
    console.log("No equal digits in the number.");
}