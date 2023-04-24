function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = document.querySelector(".color")
const changeColor = document.querySelector(".change-color")
const body = document.querySelector("body")
function colorChange(){
  const color = getRandomHexColor()
  text.textContent = color;
  body.style.backgroundColor = color;
}
changeColor.addEventListener("click", colorChange)
