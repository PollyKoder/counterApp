const counterValue = document.querySelector("#counterValueID");
console.log(counterValue);
const plussButton = document.querySelector("#bPlus");
console.log(plussButton);
const minusButton = document.querySelector("#bMinus");
console.log(minusButton);
const bReset = document.querySelector("#reset");
console.log(bReset);
//
//Variabler som kan reknes med;
let count = 0;

// funksjon;
function increment() {
  count = count + 1;
  console.log(count);
  counterValue.textContent = count;
}

function decrement() {
  count = count - 1;
  console.log(count);
  counterValue.textContent = count;
}

//Velger å bruke addEventLister, da den virker mer intuitiv for meg
// - og jeg liker at jeg da kan legge ved flere funksjoner senere//
plussButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);

bReset.addEventListener("click", reset);

function reset() {
    count = 0;
    counterValue.textContent = count;
}