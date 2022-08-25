// Есть блок с текстом на странице и кнопку. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет

const newText = document.querySelector(".new-text");
const newButt = document.querySelector(".new-butt");

newButt.addEventListener("click", function () {
  newText.classList.toggle("text-color");
});
