// 1. Создать сущность человека (данные вводит пользователь)
// имя
// возраст
// Метод вывода данных об объекте


function User() {
  this.name = prompt("Your name?", "Vasya");
  this.age = prompt("Your age?", 18);
  this.gender = prompt("Your gender?", "male");
}


let user = new User();
console.log(user);

// let user2 = new User();
// console.log(user2);

function showData(userName) {
  for (item in userName) {
    console.log(item, ":", userName[item]);
  }
}

showData(user);