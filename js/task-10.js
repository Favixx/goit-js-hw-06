function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesDiv = document.querySelector("#boxes")
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const amount = document.querySelector('[type="number"]')
let sizes = 30;
function creatingHandler(){
  for (let i = 0; i<amount.value; i+=1){
   let item = document.createElement("div")
   item.style.height = `${sizes}px`;
   item.style.width = `${sizes}px`;
   sizes+=10;
   item.style.backgroundColor = getRandomHexColor();
   boxesDiv.append(item)
  }
}
function destroyingHandler(){
boxesDiv.innerHTML = ""
sizes = 30;
}
createButton.addEventListener("click", creatingHandler)
destroyButton.addEventListener("click", destroyingHandler)
console.dir(boxesDiv)