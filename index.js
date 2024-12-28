// Your code here
// Grabbing the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Prevent the dodger from going past the right edge
  if (left < 360) { // 400px (game field width) - 40px (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for keydown events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
