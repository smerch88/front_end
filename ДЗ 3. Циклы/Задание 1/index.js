// Вывести в консоль числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….)
otput_string = "";
for (let i = 20; i < 30.5; i+=0.5){
    otput_string += (i + ' ') ;
}

console.log(otput_string);