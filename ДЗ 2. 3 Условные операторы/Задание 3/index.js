// 3) Даны 3 числа, определить наибольшее из них.

const variable_1 = parseInt(prompt("Enter 1 number"));
const variable_2 = parseInt(prompt("Enter 2 number"));
const variable_3 = parseInt(prompt("Enter 3 number"));

if (variable_1 > variable_2 && variable_1 > variable_3){
    console.log("1 number is the biggest");
}
else if (variable_2 > variable_1 && variable_2 > variable_3){
    console.log("2 number is the biggest");   
}
else if (variable_3 > variable_1 && variable_3 > variable_2){
    console.log("3 number is the biggest");
}
else {
    console.log("2 biggest numbers are equal");
}