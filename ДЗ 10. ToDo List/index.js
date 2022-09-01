"use stict";

let text;
let i = 0;

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  i += 1;
  event.preventDefault();
  if (this.elements[0].value.length === 0) {
    alert("You cant add empty field!");
  } else {
    text = this.elements[0].value;
    const field = document.createElement("p"); //добавления текста из формы
    field.setAttribute("class", "");
    field.innerText = text;
    document.body.appendChild(field);

    const checkbox = document.createElement("input"); //добавление чекбокса
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    document.body.appendChild(checkbox);

    const removeBtn = document.createElement("button"); //добавдение кнопки удалить
    removeBtn.setAttribute("id", `btnRemoveTask${i}`);
    removeBtn.innerText = "Remove Task";
    document.body.appendChild(removeBtn);

    const btnRemoveTask = document.getElementById(`btnRemoveTask${i}`);
    btnRemoveTask.addEventListener("click", removeField);

    checkbox.addEventListener("change", function () {
      //чекбокс перечеркивает текст
      if (this.checked) {
        field.setAttribute("class", "line-through ");
        console.log("Checkbox is checked..");
      } else {
        field.setAttribute("class", "");
        console.log("Checkbox is not checked..");
      }
    });

    function removeField() {
      //удаляет 3 елемента задания
      field.remove();
      removeBtn.remove();
      checkbox.remove();
    }
  }
});
