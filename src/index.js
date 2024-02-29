import "./style.css";
import displayWeather from "./displayWeather";
import getWeather from "./getWeather";
import weatherAppIcon from "./icons/weather-app.png";


const header = document.querySelector('header');
const appIcon = new Image();
appIcon.src = weatherAppIcon;
appIcon.classList.toggle('app-icon');
header.appendChild(appIcon);

const searchBtn = document.querySelector(".btn-search");
const searchBox = document.querySelector("#location");

searchBtn.addEventListener("click", async () => {
  const weather = await getWeather(`${searchBox.value}`);
  console.log(weather);
  displayWeather(weather);
});

// Test function
(async () => {
  const weather = await getWeather(`Moscow`);
  console.log(weather);
  displayWeather(weather);
})();
