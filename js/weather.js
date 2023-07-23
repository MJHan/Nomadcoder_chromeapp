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
      const weatherMain = data.weather[0].main;
      i.className = getWeatherIcon(weatherMain);
      div.innerText = `${data.main.temp}℃`;
      weather.appendChild(i);
      weather.appendChild(div);
      city.innerText = `${data.name}, H:${data.main.humidity}%`;
    })
  );
}

function getWeatherIcon(weather) {
  switch (weather) {
    case "Clear":
      return "wi wi-sunny";
      break;
    case "Rain":
      return "wi wi-rain";
      break;
    case "Drizzle":
      return "wi wi-raindrops";
      break;
    case "Thunderstorm":
      return "wi wi-thunderstorm";
      break;
    case "Snow":
      return "wi wi-snow";
      break;
    case "Clouds":
      return "wi wi-cloudy";
      break;
    case "Mist":
      return "wi wi-showers";
      break;
    case "Smoke":
      return "wi wi-smoke";
      break;
    case "Haze":
      return "wi wi-haze";
      break;
    case "Dust":
      return "wi wi-dust";
      break;
    case "Fog":
      return "wi wi-fog";
      break;
    case "Squall":
      return "wi wi-cloudy-gusts";
      break;
    case "Ash":
      return "wi wi-cloudy";
      break;
    case "Tornado":
      return "wi wi-sandstorm";
      break;
    case "Sand":
      return "wi wi-sandstorm";
      break;
    default:
      return "wi wi-sunny";
  }
}

function onGeoError() {
  alert("Can't find you. No weather for you. 😩");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
