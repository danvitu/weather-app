import "./style.css";
import displayWeather from "./displayWeather";
import getWeather from "./getWeather";

const searchBtn = document.querySelector(".btn-search");
const searchBox = document.querySelector("#location");

searchBtn.addEventListener("click", async () => {
  const weather = await getWeather(`${searchBox.value}`);
  console.log(weather);
  displayWeather(weather);
});
