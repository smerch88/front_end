const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");
const form = document.querySelector("form");
let userIds = [1];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(form.number.value);
  userIds = [form.number.value];
  fetchUsersBtn.disabled = false;
});

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
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>ID</b>: ${user.id}</p>
        <p><b>Title</b>: ${user.title}</p>
        <p><b>Price</b>: ${user.price}</p>
        <p><b>Description</b>: ${user.description}</p>
        <p><b>Category</b>: ${user.category}</p>
        <img src="${user.image}">
        <p><b>Rate: </b>${user.rating.rate}</p>
        <p><b>Count: </b>${user.rating.count}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
  fetchUsersBtn.disabled = true;
}
