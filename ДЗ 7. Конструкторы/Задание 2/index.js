// 2. Создать сущность автомобиля:

// Характеристики автомобиля отдельными свойствами, 3 свойства

// Методы:

// Вывод на экран данных об этом автомобиле
// Присвоение этого автомобиля владельцу (записать в автомобиль объект владельца)
// Все данные о человеке и автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. в случае необходимости).
// Максимально использовать функции

function User() {
    this.name = prompt("Your name?", "Enter name here");
    this.age = prompt("Your age?", 18);
}


function Car(user) {
    if (user.age >= 18) {
        this.user = user;
        this.brand = empyFieldStr("Brand name:");
        this.year = empyFieldStr("Car year:");
        this.tires = empyFieldStr("Tires:");
        this.power = empyFieldStr("Engine power");
    }
    else alert("You are not allowed to derive a car");
}


let user = new User();
let car = new Car(user);


function showData(userName) {
    console.log("______________________")
    for (item in userName) {
        if (userName[item] !== null && userName[item] !== false) {
            console.log(item, ":", userName[item]);
        }
    }
    console.log("______________________")
}


function empyFieldStr(msg) {
    let text;
    do {
        text = prompt(msg);
        if (text === null) {
            text = false;
        };
    } while (text.length === 0);
    return text;
};


showData(user);
showData(car);
console.log(car)
