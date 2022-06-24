const toggleBtn = document.querySelector('.toggleBtn');
const resetBtn = document.querySelector('.reset');
const btnDiv = document.querySelector('.buttons');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const millisecond = document.querySelector('.millisecond');

console.log(resetBtn);

let state = true
let mls = 0
let sec = 0
let min = 0

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    toggleBtn.innerHTML = `<i class="fa-solid fa-circle-pause">`
    let myInterval = setInterval(timer, 10)
})

function timer () {
    if (mls < 100) {
        millisecond.innerHTML = mls;
        mls++;

        if (mls == 100) {
            second.innerHTML = sec;
            sec++
            mls == 0
            timer()
        }
    }
    
}