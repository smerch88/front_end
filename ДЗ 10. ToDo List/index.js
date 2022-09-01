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
  } else if (this.elements[0].value.length > 20) {
    alert("Your task is too long!");
  } else {
    let div = document.createElement("div");
    div.setAttribute("class", "wrapper");
    document.body.appendChild(div);

    text = this.elements[0].value;
    const field = document.createElement("p"); //добавления текста из формы
    field.innerText = text;
    div.appendChild(field);

    const checkbox = document.createElement("input"); //добавление чекбокса
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    div.appendChild(checkbox);

    const removeBtn = document.createElement("button"); //добавдение кнопки удалить
    removeBtn.setAttribute("id", `btnRemoveTask${i}`);
    removeBtn.setAttribute("class", "removeBtn");
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

    function removeField() {
      //удаляет 3 елемента задания
      field.remove();
      removeBtn.remove();
      checkbox.remove();
      div.remove();
    }
  }
});
