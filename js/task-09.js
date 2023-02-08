const buttonChangeColor = document.querySelector(".change-color");

const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = document.body.style.backgroundColor;
  
});

