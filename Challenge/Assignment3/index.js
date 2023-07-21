/* 23.7.17 - Nomadcoders VanillaJS Challenge Assignment #3  by MJHan */
const playForm = document.querySelector("#playForm");
const maxInput = playForm.querySelector("#maxInput");
const guessInput = playForm.querySelector("#guessInput");
const summaryDiv = document.querySelector("#summary");
const choseNumberSpan = document.querySelector("#choseNumber");
const machineNumberSpan = document.querySelector("#machineNumber");
const resultDiv = document.querySelector("#result");

/**
 * Create Random Integer less than maxInput
 * @param {number} maxInput
 */
const getRandomNumber = (maxInput) => {
  return Math.ceil(Math.random() * maxInput);
};

/**
 * Event Handler : Show results of this game.
 */
const handleSubmit = (event) => {
  event.preventDefault();
  // alert(`${maxInput.value} : ${guessInput.value}`);
  const maxNumber = parseInt(maxInput.value, 10);
  const guessNumber = parseInt(guessInput.value, 10);
  const machineNumber = getRandomNumber(maxNumber);
  if (guessNumber > maxNumber) {
    alert(
      `Please enter an integer less than ${maxNumber}. You enter ${guessNumber}`
    );
    guessInput.value = "";
    guessInput.focus();
  } else {
    choseNumberSpan.innerText = guessNumber;
    machineNumberSpan.innerText = machineNumber;
    summaryDiv.classList.remove("hidden");
    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("lost");
    resultDiv.innerText = "You Lost 😩";
    if (guessNumber === machineNumber) {
      resultDiv.classList.remove("lost");
      resultDiv.classList.add("won");
      resultDiv.innerText = "You Won! 👏👏👏";
    }
  }
};

playForm.addEventListener("submit", handleSubmit);
