// Html

{/* <div class="container" >
<button onclick="handleInc()" id="increment">Inc</button>
<button onclick="handleDec()" id="decrement">Dec</button>
<h3 id="counter">0</h3>
<button id="dislike" onclick="reset()">Dislike</button>
</div> */}

// Js

let count = 0;
const handleInc = () => {
count++;
document.getElementById('counter').innerHTML = count;
}

const handleDec = () => {
count--;
document.getElementById('counter').innerHTML = count;
}

const reset = () => {
    document.getElementById('counter').innerHTML = 0;
}