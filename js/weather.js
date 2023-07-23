const weather = document.querySelector("#weather div:first-child");
const city = document.querySelector("#weather div:last-child");
const API_KEY = "16404a0f651db6245890f34e76fc0e29";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
      city.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you. 😩");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
