const formElCar = document.querySelector(".cardata-form");
const FORM_KEY_CAR = "car-form-state";
formElCar.addEventListener("input", handleInput);
formElCar.addEventListener("submit", handleSubmit);

function handleInput(event) {
  let savedData = JSON.parse(localStorage.getItem(FORM_KEY_CAR)) ?? {};
  const { name, value } = event.target;
  savedData = {
    ...savedData,
    [name]: value,
  };

  localStorage.setItem(FORM_KEY_CAR, JSON.stringify(savedData));
}

const renderDataCar = () => {
  let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY_CAR)) ?? {}; // оператор нульового злиття

  const inputNames = Object.keys(dataToRender);
  inputNames.forEach((inputName) => {
    let input = formElCar.elements[inputName];
    let valueKey = "value";
    input[valueKey] = dataToRender[inputName];
  });
};
renderDataCar();

function handleSubmit(event) {
  event.preventDefault();

  let finalData = {};
  const formData = new FormData(formElCar);
  for (const [name, value] of formData.entries()) {
    finalData[name] = value;
  }

  localStorage.removeItem(FORM_KEY_CAR);
  cars.push(
    new Car(`"${finalData.brand}"`, `${finalData.year}`, `${finalData.hp}`)
  );
  formElCar.reset();
  console.log(cars);
}
