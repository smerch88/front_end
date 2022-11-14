const fetchUsersBtn = document.querySelector(".btn");
const selectorRef = document.querySelector(".selector");
const userList = document.querySelector(".user-list");
const form = document.querySelector("form");
let userIds = [1, 2, 3, 4, 5, 6, 7, 8];

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(form.number.value);
//   userIds = [form.number.value];
//   fetchUsersBtn.disabled = false;
// });

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = "https://fakestoreapi.com";

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/products/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markupSelector = users
    .map((user) => `<option value="${user.category}">${user.category}</option>`)
    .join("");
  selectorRef.innerHTML = markupSelector;
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>ID</b>: ${user.id}</p>
        <p><b>Title</b>: ${user.title}</p>
        <p><b>Price</b>: ${user.price}</p>
        <p"><b>Description</b>: ${user.description}</p>
        <p><b>Category</b>:<span class="js-category">${user.category}</span> </p>
        <img src="${user.image}" width="100px" >
        <p><b>Rate: </b>${user.rating.rate}</p>
        <p><b>Count: </b>${user.rating.count}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}

selectorRef.addEventListener("change", function () {
  let data = document.querySelectorAll(".js-category");
  console.log(this.value);
  console.log(data);
  data.forEach((e) => {
    console.log(e.textContent);
    if (this.value === e.textContent) {
      console.log("hide");
      e.closest(".item").classList.add("hidden");
    }
  });
});
