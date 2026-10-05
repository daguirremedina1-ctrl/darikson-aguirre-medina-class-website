const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "You clicked the button! Now try clicking the second button!";
}

button.addEventListener("click", changeMessage);

const movingButton = document.querySelector("#movingButton");

movingButton.addEventListener("mouseover", () => {
  // Generate random positions within the container
  const newX = Math.floor(Math.random() * (window.innerWidth - 100));
  const newY = Math.floor(Math.random() * (window.innerHeight - 50));
  
  // Apply new position
  movingButton.style.position = "absolute";
  movingButton.style.left = newX + "px";
  movingButton.style.top = newY + "px";
});