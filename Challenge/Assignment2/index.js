const colorClasses = ["blue", "purple", "yellow"];

const handleResize = () => {
  const windowSize = window.innerWidth;
  const body = document.querySelector("body");
  body.classList.remove(...colorClasses);

  if (windowSize < 600) {
    body.classList.add(colorClasses[0]);
  } else if (windowSize >= 600 && windowSize < 1000) {
    body.classList.add(colorClasses[1]);
  } else {
    body.classList.add(colorClasses[2]);
  }
};

window.addEventListener("resize", handleResize);
