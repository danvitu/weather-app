import Icon from "./icons/wind.png";

const displayWeather = (weather) => {
  const displayBox = document.querySelector(".display-box");
  displayBox.textContent = "";
  const location = document.createElement("span");
  location.classList.toggle("location");
  const temperature = document.createElement("span");
  temperature.classList.toggle("temperature");
  const tempC = document.createElement("span");
  tempC.classList.toggle("temp-c");
  const tempF = document.createElement("span");
  tempF.classList.toggle("temp-f");
  const wind = document.createElement("span");
  wind.classList.toggle("wind");
  const windKph = document.createElement("span");
  windKph.classList.toggle("wind-kph");
  const windIcon = new Image();
  windIcon.src = Icon;
  const condition = document.createElement("span");
  condition.classList.toggle("condition");
  const iconContainer = document.createElement("div");
  iconContainer.classList.toggle("icon-container");
  const icon = document.createElement("img");
  icon.classList.toggle("condition-icon");

  location.textContent = `${weather.city}, ${weather.country}`;
  tempC.textContent = `${weather.temp_c} °C`;
  tempF.textContent = `${weather.temp_f} °F`;
  windKph.textContent = ` Wind speed is ${weather.wind_kph} kph`;
  condition.textContent = weather.condition;
  icon.src = weather.icon;

  displayBox.appendChild(location);
  iconContainer.appendChild(icon);
  displayBox.appendChild(iconContainer);
  temperature.appendChild(tempC);
  displayBox.appendChild(temperature);
  iconContainer.appendChild(condition);
  wind.appendChild(windIcon);
  wind.appendChild(windKph);
  displayBox.appendChild(wind);

  tempC.addEventListener("click", () => {
    temperature.textContent = "";
    temperature.appendChild(tempF);
  });

  tempF.addEventListener("click", () => {
    temperature.textContent = "";
    temperature.appendChild(tempC);
  });
};

export default displayWeather;
