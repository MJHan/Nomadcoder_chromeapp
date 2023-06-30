const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.png",
  "4.jpeg",
  "5.jpeg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "9-1.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
