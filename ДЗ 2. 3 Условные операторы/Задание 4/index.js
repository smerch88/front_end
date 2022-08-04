// 4) Логирование пользователя:
// Проверить, имеет ли пользователь право доступа в админ панель сайта.
// Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.
// Результаты каждого шага выводить в консоль.

const login = prompt("Enter a LogIn");
console.log("Debug msg: Entered logIn: ", login)
if (login == "admin") {

    const password = "mySuperPassword";
    let entered_password = prompt("Enter a password");
    
    if (entered_password == password){
        console.log("Debug msg: Acces granted. Is an admin.")
    }
    else {
        console.log("Debug msg: Acces denied. Wrong password.")
    }
}
else {
    console.log("Debug msg: Acces denied. Not an admin.")
}
