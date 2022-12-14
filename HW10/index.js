// Создать ToDoList

// Инпут – ввод названия задачи.

// Валидация этого поля (поле обязательно).

// При клике на кнопку “добавить/add”, задача появляется под формой,

// если поставить галочку возле задания, то текст перечеркивается.

// <input type="checkbox" value="task-1" />
// Если забрать галочку то перечеркивание исчезает.

// Возможность удалить задачу[element.remove()]

"use stict";

let text;
let i = 0;

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  i += 1;
  event.preventDefault();
  if (this.elements[0].value.length === 0) {
    alert("You cant add empty field!");
    return;
  } else if (this.elements[0].value.length > 20) {
    alert("Your task is too long!");
    return;
  }

  const div = createNode("div", [{ name: "class", value: "wrapper" }]);
  document.body.appendChild(div);

  text = this.elements[0].value;

  const field = createNode("p");
  field.innerText = text;
  div.appendChild(field);

  const checkbox = createNode("input", [
    { name: "type", value: "checkbox" },
    { name: "name", value: "checkbox" },
    { name: "class", value: "checkbox" },
  ]);
  div.appendChild(checkbox);

  const removeBtn = createNode("button", [
    { name: "id", value: `btnRemoveTask${i}` },
    { name: "class", value: "removeBtn" },
  ]);
  removeBtn.innerText = "Remove";
  div.appendChild(removeBtn);

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

  this.elements[0].value = ""; //обнуляет поле ввода

  function removeField() {
    //удаляет 3 елемента задания
    field.remove();
    removeBtn.remove();
    checkbox.remove();
    div.remove();
  }
});

function createNode(tagName, attributes = []) {
  const el = document.createElement(tagName);
  attributes.forEach(({ name, value }) => {
    el.setAttribute(name, value);
  });
  return el;
}
