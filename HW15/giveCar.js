const formElGive = document.querySelector(".give-form");
const FORM_KEY_GIVE = "give-form-state";
formElGive.addEventListener("input", handleInput);
formElGive.addEventListener("submit", handleSubmit);

function handleInput(event) {
  let savedData = JSON.parse(localStorage.getItem(FORM_KEY_GIVE)) ?? {};
  const { name, value } = event.target;
  savedData = {
    ...savedData,
    [name]: value,
  };

  localStorage.setItem(FORM_KEY_GIVE, JSON.stringify(savedData));
}

const renderDataGive = () => {
  let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY_GIVE)) ?? {}; // оператор нульового злиття

  const inputNames = Object.keys(dataToRender);
  inputNames.forEach((inputName) => {
    let input = formElGive.elements[inputName];
    let valueKey = "value";
    input[valueKey] = dataToRender[inputName];
  });
};
renderDataGive();

function handleSubmit(event) {
  event.preventDefault();

  let finalData = {};
  const formData = new FormData(formElGive);
  for (const [name, value] of formData.entries()) {
    finalData[name] = value;
  }

  localStorage.removeItem(FORM_KEY_GIVE);
  formElGive.reset();
  let lastUser = users.length - 1;
  let lastCar = cars.length - 1;
  //   console.log(users[lastUser]);
  //   console.log(typeof users[lastUser]);
  users[lastUser].setCar(cars[lastCar]);

  console.log("users: ", users);
  console.log("cars: ", cars);
  renderCards();
}
