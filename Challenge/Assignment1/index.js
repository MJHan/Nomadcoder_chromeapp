// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  enter: () => {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is here!";
    // console.log("mouseenter");
  },
  leave: () => {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is gone!";
    // console.log("mouseleave");
  },
  resizing: () => {
    h2.style.color = colors[2];
    h2.innerText = "You just resized!";
    // console.log("resize");
  },
  opencontextmenu: () => {
    h2.style.color = colors[3];
    h2.innerText = "That was a right click!";
    // console.log("contextmenu");
  },
};
const h2 = document.querySelector("h2");
h2.addEventListener("mouseenter", superEventHandler.enter);
h2.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resizing);
window.addEventListener("contextmenu", superEventHandler.opencontextmenu);
