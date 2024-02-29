const displayWeather = (weather) => {
  const displayBox = document.querySelector(".display-box");
  displayBox.textContent = "";
  const location = document.createElement("span");
  location.classList.toggle("location");
  const tempC = document.createElement("span");
  tempC.classList.toggle("temp-c");
  const feelsLikeC = document.createElement("span");
  feelsLikeC.classList.toggle("feels-like-c");
  const windKph = document.createElement("span");
  windKph.classList.toggle("wind-kph");
  const condition = document.createElement("span");
  condition.classList.toggle("condition");
  const icon = document.createElement("img");
  icon.classList.toggle("condition-icon");

  location.textContent = `${weather.city}, ${weather.country}`;
  tempC.textContent = weather.temp_c;
  feelsLikeC.textContent = weather.feelslike_c;
  windKph.textContent = weather.wind_kph;
  condition.textContent = weather.condition;
  icon.src = weather.icon;

  displayBox.appendChild(location);
  displayBox.appendChild(tempC);
  displayBox.appendChild(feelsLikeC);
  displayBox.appendChild(windKph);
  displayBox.appendChild(condition);
  displayBox.appendChild(icon);
};

export default displayWeather;
