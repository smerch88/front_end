const placeCards = document.querySelector(".user-data");

const renderCards = () => {
  let lastUser = users.length - 1;
  let lastCar = cars.length - 1;
  console.log(users[lastUser]);
  console.log(users[lastCar]);
  console.log(users[lastUser].getCars);

  const li = document.createElement("li");
  li.classList.add("card");

  li.innerHTML = `Name: ${users[lastUser].name},
   Age: ${users[lastUser].age},
   Car: ${users[lastUser]._cars},
   `;

  placeCards.append(li);
};
