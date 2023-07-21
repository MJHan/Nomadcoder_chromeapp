const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.background = `url("./img/${chosenImage}") no-repeat center fixed`;
document.body.style.backgroundSize = "cover";
// document.body.style.height = "100vh";
// document.body.style.margin = "0";
