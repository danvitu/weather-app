async function getWeatherData(location) {
  const weatherAPI = "f6a31bc29e5349c896785531242502";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${location}`,
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

async function getWeather(name) {
  const locationWeather = await getWeatherData(name);
  const weatherObj =
    JSON.parse(`{"country":"${locationWeather.location.country}",
      "city":"${locationWeather.location.name}",
      "temp_c":"${locationWeather.current.temp_c}",
      "feelslike_c":"${locationWeather.current.feelslike_c}",
      "wind_kph":"${locationWeather.current.wind_kph}",
      "condition":"${locationWeather.current.condition.text}",
      "icon":"${locationWeather.current.condition.icon}"
    }`);
  return weatherObj;
}

export default getWeather;