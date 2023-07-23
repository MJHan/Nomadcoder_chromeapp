const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const API_KEY = "16404a0f651db6245890f34e76fc0e29";

async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  await fetch(url).then((response) =>
    response.json().then((data) => {
      const div = document.createElement("div");
      const i = document.createElement("i");
      const weatherText = data.weather[0].main;
      i.className = getWeatherIcon(weatherText);
      div.innerText = `${data.main.temp}℃`;
      weather.appendChild(i);
      weather.appendChild(div);
      city.innerText = `${data.name}, H:${data.main.humidity}%`;
    })
  );
}

function getWeatherIcon(weather) {
  return icons[weathers.findIndex((item) => item === weather)];
}

const icons = [
  "wi wi-sunny",
  "wi wi-rain",
  "wi wi-raindrops",
  "wi wi-thunderstorm",
  "wi wi-snow",
  "wi wi-cloudy",
  "wi wi-showers",
  "wi wi-smoke",
  "wi wi-haze",
  "wi wi-dust",
  "wi wi-fog",
  "wi wi-cloudy-gusts",
  "wi wi-cloudy",
  "wi wi-sandstorm",
  "wi wi-sandstorm",
];

const weathers = [
  "Clear",
  "Rain",
  "Drizzle",
  "Thunderstorm",
  "Snow",
  "Clouds",
  "Mist",
  "Smoke",
  "Haze",
  "Dust",
  "Fog",
  "Squall",
  "Ash",
  "Tornado",
  "Sand",
];

function onGeoError() {
  alert("Can't find you. No weather for you. 😩");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
