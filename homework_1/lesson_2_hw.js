// // Выполните следующие задачи. Каждая задача – в отдельном JS файле. Файлы подключать к index.html Выводить результаты в консоль либо alert, выводить в User Friendly виде. Все значения получать от пользователя (prompt).

// alert("1. Enter 2 number 1 by 1 : ");

// const a = Number(prompt("Enter 1 number : "));
// const b = Number(prompt("Enter 2 number : "));

// console.log("First Nuber: ", a, ", Second Nuber: ", b);

// // 1) Создать скрипт для сложения, деления, умножения и вычитания двух чисел. Вывод этих результатов.

// console.log("Sum of Nubers (a+b) : ", a + b);
// console.log("Dividing the First Number by the Second (a/b) : ", a / b);
// console.log("Multiplying the First Number by the Second (a*b) : ", a * b);
// console.log("Subtracting the Second Number from the First (a-b) : ", a - b);

// // 2) Создать скрипт, который получает два значения и выводит true, если значения равны, false – если нет.

// console.log("2 Numbers Are Equal: ", a == b);

// // 3) Определить среднее арифмитическое 3 чисел.

// alert("3. Enter the Third Value : ");

// const c = Number(prompt("Enter 3 number : "));

// console.log("Third Nuber: ", c);
// console.log("Arithmetic Mean of Three Numbers ((a+b+с)/2) : ", (a + b + c)/2);

// // 4) Получить от пользователя 3 строки и вывести их в любом порядке одной командой (конкатенация).

// alert("4. Enter 3 Strings of Text : ");

// const user_string_1 = String(prompt("Enter 1 String : "));
// const user_string_2 = String(prompt("Enter 2 String : "));
// const user_string_3 = String(prompt("Enter 3 String : "));

// console.log("Strings Concatenated : ", user_string_1 + user_string_2 + user_string_3);

// 5) Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел, пример: 10369 1 0 3 6 9.

alert("5. Enter the Five-digit Number : ");

const five_digit_value = Number(prompt("Enter the Five-digit Number : "));
let number_part_1 = null;
let number_part_2 = null;
let number_part_3 = null;
let number_part_4 = null;
let number_part_5 = null;

number_part_5 = last_number(five_digit_value);
number_part_4 = last_number((five_digit_value-number_part_5)/10);
number_part_3 = last_number(((five_digit_value-number_part_5)/10-number_part_4)/10);
number_part_2 = last_number((((five_digit_value-number_part_5)/10-number_part_4)/10-number_part_3)/10);
number_part_1 = last_number(((((five_digit_value-number_part_5)/10-number_part_4)/10-number_part_3)/10-number_part_2)/10);

console.log("The Number is : ", number_part_1, " ", number_part_2, " ", number_part_3, " ", number_part_4, " ", number_part_5);

function last_number(number) {
    while (number>10){
        number = number % 10;
    }
    return number;
};