"use strict";

// Создать слайдер
// Он может показывать минимум 10 картинок.
// Слайдер имеет две кнопки: Previous / Next.
// При нажатии на которые он показывает предыдущую / следующую картинку.
// Слайдер имеет нормальный вид и не меняет размер в зависимости от картинки (если только это не анимировано красиво).
// НА крайних позициях своей навигации (первая/последняя картинка) слайдер может дизеблить кнопки соответственно (Previous/Next) ИЛИ может переходить на другой конец ряда картинок (с первой на последнюю и наоборот) (типа слайдер бесконечный).
// Для работы с картинками в слайдере использовать
// document.createElement
// ИЛИ
// работу с атрибутами тега <img/>
// Задание со *: * реализовать listner для next/prev через делегирование событий с помощью одного addEventListener

const prevButton = document.querySelector(".prev-image");
const nextButton = document.querySelector(".next-image");
const imageStyle = "style-img";

function slider(maxImg) {
  let i = 1;
  nextButton.addEventListener("click", function () {
    console.log("'Next' button pressed");
    if ((i += 1) == maxImg + 1) {
      i = 1;
    }
    console.log(i);
    document.querySelector(
      ".content-img"
    ).innerHTML = `<img src="./images/${i}.png" alt="img ${i}" class ="${imageStyle}"/>`;
  });

  prevButton.addEventListener("click", function () {
    console.log("'Previous' button pressed");
    if ((i -= 1) == 0) {
      i = maxImg;
    }
    console.log(i);
    document.querySelector(
      ".content-img"
    ).innerHTML = `<img src="./images/${i}.png" alt="img ${i}" class ="${imageStyle}"/>`;
  });
}

slider(10);
