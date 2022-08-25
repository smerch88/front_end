// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt ссылку, при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
// document.location.href = “url_to_go”;

let userLink;
const buttonOne = document.querySelector(".enter-link");
const buttonTwo = document.querySelector(".visit-link");

buttonOne.addEventListener("click", function () {
  userLink = prompt("Enter a Link:");
  if (!isValidUrl(userLink)) {
    alert("Link is Invalid!");
    userLink = "";
  }
});

buttonTwo.addEventListener("click", function () {
  document.location.href = userLink;
});

function isValidUrl(url) {
  let objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
}
