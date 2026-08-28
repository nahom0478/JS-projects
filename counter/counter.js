const countDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

let count = 0;
incrementBtn.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', function() {
    if (count > 0) {
    count--;
    countDisplay.textContent = count;
    }
});