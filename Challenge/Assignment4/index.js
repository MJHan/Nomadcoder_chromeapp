const clockTitle = document.querySelector(".js-clock");
const KOREA_TIME_DIFF = 9 * 60 * 60 * 1000;

function getClock() {
  const now = new Date();
  const utcTime = now.getTime();
  const timeDiff = new Date("2023-12-25") - new Date(utcTime + KOREA_TIME_DIFF);
  const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  const hours = Math.floor(timeDiff / (60 * 60 * 1000)) % 24;
  const minutes = Math.floor(timeDiff / (60 * 1000)) % 60;
  const seconds = Math.floor(timeDiff / 1000) % 60;
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000); //execute every second
