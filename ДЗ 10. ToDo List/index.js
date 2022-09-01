"use stict";

let text;
let i = 0;

function removeField() {
  document.body.removeChild(document.body.lastChild);
  document.body.removeChild(document.body.lastChild);
  document.body.removeChild(document.body.lastChild);
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  i += 1;
  event.preventDefault();
  console.log(this.elements[0].value);
  text = this.elements[0].value;

  const field = document.createElement("p");
  field.innerText = text;
  document.body.appendChild(field);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  document.body.appendChild(checkbox);

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("id", `btnRemoveTask${i}`);
  removeBtn.innerText = "Remove Last Task";
  document.body.appendChild(removeBtn);

  const btnRemoveTask = document.getElementById(`btnRemoveTask${i}`);
  btnRemoveTask.addEventListener("click", removeField);
});
