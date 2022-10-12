// Изучить самостоятельно основы jQuery (см презентацию и документацию).

// Сделать попап (модальное окно).

// Показывать его при клике на кнопку и при изменении экрана меньше 768рх

// Использовать jQuery и bootstrap для модального окна.

// Библиотеки скачать с помощью npm.

// Подключать можно через link и script на странице

// https://getbootstrap.com/docs/3.3/javascript/#modals

function togglePopup() {
  $(".content").toggle();
}

$(window).on("resize", function () {
  var win = $(this); //this = window
  if (win.width() <= 768) {
    $(".content").toggle();
    /* ... */
  }
});
