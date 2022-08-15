// 1 Дан массив объектов. Вывести массив телефонных номеров пользователей у которых баланс больше 2000 долларов. Вывести сумму балансов всех пользователей.

const userData = [
  {
    index: 0,
    isActive: true,
    name: "John Doe",
    balance: "$2,226.60",
    phone: "+1 (840) 583-3207",
  },
  {
    index: 1,
    isActive: true,
    name: "Merry Hope",
    balance: "$2,778.05",
    phone: "+1 (856) 599-3450",
  },
  {
    index: 2,
    isActive: true,
    name: "Eugene Stakidis",
    balance: "$730.10",
    phone: "+1 (840) 333-5400",
  },
  {
    index: 2,
    isActive: true,
    name: "Stan Smith",
    balance: "$5,001.50",
    phone: "+1 (839) 121-3044",
  },
  {
    index: 3,
    isActive: true,
    name: "Johnatan Tape",
    balance: "$3,020.60",
    phone: "+1 (839) 003-5579",
  },
  {
    index: 4,
    isActive: true,
    name: "Aaron Big",
    balance: "$1,999.99",
    phone: "+1 (840) 033-6873",
  },
  {
    index: 5,
    isActive: true,
    name: "Artur Cheese",
    balance: "$2,545.00",
    phone: "+1 (840) 562-3790",
  },
];


const bal = userData.filter(function (dataItem){
    dataItem.balance = dataItem.balance.replace(',','');
    dataItem.balance = dataItem.balance.slice(1, dataItem.balance.length);
    return dataItem.balance > 2000.00;
})

let numbers2000 = [];

for(let i = 0; i < bal.length; i++){
    numbers2000.push(bal[i].phone);
}

console.log(`Numbers of all balances > 2000: ${numbers2000}`);

let sum = 0;
for(let i = 0; i < bal.length; i++){
   sum += parseInt(bal[i].balance*100);
}

console.log(`Sum of all balances: $${sum/100}`);
