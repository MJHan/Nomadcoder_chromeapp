const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const button = document.querySelector("button");
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const clickHandler = (event) => {
  event.preventDefault();
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  // console.log(`clicked! ${randomColor1} ${randomColor2}`);
  while (randomColor1 === randomColor2) {
    // console.log("woops! try get another color");
    randomColor2 = getRandomColor();
    // console.log(`clicked! ${randomColor1} ${randomColor2}`);
  }
  document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
};

button.addEventListener("click", clickHandler);
