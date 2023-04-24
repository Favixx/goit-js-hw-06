let counterValue = 0;
const valueEl = document.querySelector('#value');
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');
const increaseValueBtn = document.querySelector('[data-action="increment"]');
function decreaseValueFunc(){
    counterValue-=1;
    valueEl.textContent=counterValue;
}
function increaseValueFunc(){
    counterValue+=1;
    valueEl.textContent=counterValue;
}
decreaseValueBtn.addEventListener("click", decreaseValueFunc)
increaseValueBtn.addEventListener("click", increaseValueFunc)
