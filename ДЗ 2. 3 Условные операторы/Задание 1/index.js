// 1) Дано трехзначное число. 
// Верно ли, что все цифры одинаковы? ‘333’
// Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’

const variable_1 = String(parseInt(prompt("Enter a number")));
let step;
let counter_of_same_numbers = 1;

for (step = 0; step < variable_1.length - 1; step++) {
    if (variable_1.charAt(step) == variable_1.charAt(step + 1 )) {
        counter_of_same_numbers += 1;      
        } 
    else {
        console.log("All digits of a number are not equal."); 
        break;
    }
    if (counter_of_same_numbers == variable_1.length) {
        console.log("All digits of a number are equal.");
    }
}

if (variable_1.charAt(0) == variable_1.charAt(1) == variable_1.charAt(2)){
    console.log("All digits of a number are equal.");
}
else if (variable_1.charAt(0) == variable_1.charAt(1) && variable_1.charAt(0) != variable_1.charAt(2)){
    console.log("All digits of a number are equal.");
}