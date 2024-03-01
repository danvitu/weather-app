async function getWeather(location) {
  try {
    const weatherAPI = "f6a31bc29e5349c896785531242502";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${location}`,
    );
    const locationWeather = await response.json();
    const weatherData = {
      country: `${locationWeather.location.country}`,
      city: `${locationWeather.location.name}`,
      temp_c: `${locationWeather.current.temp_c}`,
      temp_f: `${locationWeather.current.temp_f}`,
      feelslike_c: `${locationWeather.current.feelslike_c}`,
      wind_kph: `${locationWeather.current.wind_kph}`,
      condition: `${locationWeather.current.condition.text}`,
      icon: `${locationWeather.current.condition.icon}`,
    };
    return weatherData;
  } catch (err) {
    alert("Oh no! Something wrong!");
  }
}

export default getWeather;
