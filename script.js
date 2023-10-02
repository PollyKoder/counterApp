const plussButton = document.querySelector("#bPlus");
console.log(plussButton);
const minusButton = document.querySelector("#bMinus");
console.log(minusButton);
//
//Variabler som kan reknes med;
let count = 0;

// funksjon;
function increment() {
     count = count + 1;
     console.log(count);
}

increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();

function decrement() {
    count = count - 1;
    console.log(count);
}

decrement();
decrement();
decrement();
decrement();
decrement();
decrement();
decrement();
decrement();
