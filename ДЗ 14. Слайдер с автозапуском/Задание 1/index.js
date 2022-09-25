"use strict";

// Берем за основу слайдер из предыдущих домашек.

// Слайдер автоматически переключает картинки.

// Доходя до последнего слайдер останавливается.

// Добавить точки под слайдером (если их не было раньше), которые дают возможность переключаться между слайдами и показывают текущий.

// Не обязательное задание: реализовать форму с одним полем, поле принимает дату (type="date"). После ввода даты выводиться таймер (года, месяцы, дни, часы, минуты, секунды) до наступления введенной даты. Валидация не дает ввести дату >= сегодня.

const prevButton = document.querySelector(".prev-image");
const nextButton = document.querySelector(".next-image");
const imageStyle = "style-img";

let i = 1,
  time = 1,
  intervalID;

function slider(maxImg) {
  nextButton.addEventListener("click", function () {
    console.log("'Next' button pressed");
    if ((i += 1) == maxImg + 1) {
      nextButton.disabled = true;
      console.log("disabled");
      i = maxImg;
      nextButton.disabled = false;
    }
    console.log(i);
    document.querySelector(
      ".content-img"
    ).innerHTML = `<img src="./images/${i}.png" alt="img ${i}" class ="${imageStyle}"/>`;
    document.querySelector(`.dot${i}`).classList.add("dot-active");
    document.querySelector(`.dot${i - 1}`).classList.remove("dot-active");
  });

  prevButton.addEventListener("click", function () {
    console.log("'Previous' button pressed");
    if ((i -= 1) == 0) {
      prevButton.disabled = true;
      console.log("disabled");
      i = 1;
      prevButton.disabled = false;
    }
    console.log(i);
    document.querySelector(
      ".content-img"
    ).innerHTML = `<img src="./images/${i}.png" alt="img ${i}" class ="${imageStyle}"/>`;
    document.querySelector(`.dot${i}`).classList.add("dot-active");
    document.querySelector(`.dot${i + 1}`).classList.remove("dot-active");
  });
}

function oneToTen() {
  // document.querySelector(`.dot${time}`).classList.add("dot-active");
  // console.log(document.querySelector(`.dot${time}`).classList);
  time += 1;
  console.log(`Time = ${time}`);
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/${time}.png" alt="img ${time}" class ="${imageStyle}"/>`;
  if (time > 9) {
    stop();
    time = 0;
  }
  if (time == 0) {
    document.querySelector(`.dot10`).classList.add("dot-active");
    document.querySelector(`.dot9`).classList.remove("dot-active");
  }
  document.querySelector(`.dot${time}`).classList.add("dot-active");
  document.querySelector(`.dot${time - 1}`).classList.remove("dot-active");
}

slider(10);

function start() {
  intervalID = setInterval(oneToTen, 1000);
}

function stop() {
  clearInterval(intervalID);
}

start();

// dots section

const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");
const dot6 = document.querySelector(".dot6");
const dot7 = document.querySelector(".dot7");
const dot8 = document.querySelector(".dot8");
const dot9 = document.querySelector(".dot9");
const dot10 = document.querySelector(".dot10");

dot1.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/1.png" alt="img 1" class ="style-img"/>`;
  stop();
  for (let i = 0; i < 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot1.classList.add("dot-active");
});
dot2.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/2.png" alt="img 2" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot2.classList.add("dot-active");
});
dot3.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/3.png" alt="img 3" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot3.classList.add("dot-active");
});
dot4.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/4.png" alt="img 4" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot4.classList.add("dot-active");
});
dot5.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/5.png" alt="img 5" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot5.classList.add("dot-active");
});
dot6.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/6.png" alt="img 6" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot6.classList.add("dot-active");
});
dot7.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/7.png" alt="img 7" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot7.classList.add("dot-active");
});
dot8.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/8.png" alt="img 8" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot8.classList.add("dot-active");
});
dot9.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/9.png" alt="img 9" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot9.classList.add("dot-active");
});
dot10.addEventListener("click", function () {
  document.querySelector(
    ".content-img"
  ).innerHTML = `<img src="./images/10.png" alt="img 10" class ="style-img"/>`;
  stop();
  for (let i = 0; i <= 10; i++) {
    if (document.querySelector(`.dot${i}`).classList.contains("dot-active")) {
      //очистка полей не работает, не могу решить проблему
      document.querySelector(`.dot${i}`).classList.remove("dot-active");
    }
  }
  dot10.classList.add("dot-active");
});
