const toggleBtn = document.querySelector('.toggleBtn');
const resetBtn = document.querySelector('.reset');
const btnDiv = document.querySelector('.buttons');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const millisecond = document.querySelector('.millisecond');
const faSolid =document.querySelector('.fa-solid')
console.log(faSolid);

console.log(resetBtn);

let state = true
let mls = 0
let sec = 0
let min = 0


function clock() {
    mls++
    if (mls<9) {
        millisecond.innerHTML = `0${mls}`
    } 
    if (mls > 9) {
        millisecond.innerHTML = mls
    }  
    if (mls > 99) {
        sec++
        second.innerHTML = `0${sec}`
        mls = 0
        millisecond.innerHTML = `0${0}`
    }
    if (sec > 9) {
        second.innerHTML = sec
    }
    if (sec > 59) {
        min++
        minute.innerHTML = `0${min}`
        sec = 0
    }
}


toggleBtn.addEventListener('click', () => {
    
    if (faSolid.classList.contains('fa-circle-play')){
        toggleBtn.innerHTML = `<i class="fa-solid fa-circle-pause">`
        faSolid.classList.remove('fa-circle-play');
        faSolid.classList.add('fa-circle-pause');
        myInterval = setInterval(clock, 0.5)                             // spent almost half an hour here. So I was 
        // initially declaring myInterval with let and was having initialization error in the else if part. Removing 
        // the let I came around it cuz it's now global
    }
    else if (faSolid.classList.contains('fa-circle-pause')) {
        toggleBtn.innerHTML = `<i class="fa-solid fa-circle-play">`
        faSolid.classList.remove('fa-circle-pause');
        faSolid.classList.add('fa-circle-play');
        clearInterval(myInterval)
    }
    
})


resetBtn.addEventListener('click', () => {
    clearInterval(myInterval)
    mls = 0
    sec = 0 
    min = 0
    millisecond.innerHTML = `00`
    second.innerHTML = `00`
    minute.innerHTML = `00`
    toggleBtn.innerHTML = `<i class="fa-solid fa-circle-play">`
    faSolid.classList.add('fa-circle-play');
})
