const fetchWeatherBtn = document.querySelector(".btn");
const weatherList = document.querySelector(".weather-list");
// const formRef = document.querySelector("form");
let city = "LVIV";

// formRef.addEventListener("submit", (event) => {
//   event.preventDefault();
//   city = event.target.city.value;
//   console.log(city);
// });

fetchWeatherBtn.addEventListener("click", () => {
  fetchWeather()
    .then((weather) => renderWatherList(weather))
    .catch((error) => console.log(error));
});

function fetchWeather() {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderWatherList(weather) {
  const markup = `<ul>
        <li><b>Temperature: </b>${weather.main.temp}</li>
        <li><b>Pressure: </b>${weather.main.pressure}</li>
        <li><b>Weather type: </b>${weather.weather[0].description} </li>
        <li><b>Humidity: </b>${weather.main.humidity}</li>
        <li><b>Wind Speed: </b>${weather.wind.speed}</li>
        <li><img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="Weather Icon"></li>
        </ul>
        `;
  weatherList.innerHTML = markup;
}
