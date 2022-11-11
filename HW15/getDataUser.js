const formEl = document.querySelector(".userdata-form");
const FORM_KEY = "user-form-state";
formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);

function handleInput(event) {
  let savedData = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};
  const { name, value } = event.target;
  savedData = {
    ...savedData,
    [name]: value,
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(savedData));
}

const renderData = () => {
  let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {}; // оператор нульового злиття

  const inputNames = Object.keys(dataToRender);
  inputNames.forEach((inputName) => {
    let input = formEl.elements[inputName];
    let valueKey = "value";
    input[valueKey] = dataToRender[inputName];
  });
};
renderData();

function handleSubmit(event) {
  event.preventDefault();

  let finalData = {};
  const formData = new FormData(formEl);
  for (const [name, value] of formData.entries()) {
    finalData[name] = value;
  }

  localStorage.removeItem(FORM_KEY);
  users.push(new User(`"${finalData.name}"`, `${finalData.age}`));
  formEl.reset();
  console.log(users);
}
