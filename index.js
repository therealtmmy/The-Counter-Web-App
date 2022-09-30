let saveEl = document.getElementById("save-el") 
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEL.innerText = count
}

function decrement() {
    count -= 1
    countEL.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText = saveEl.innerText + countStr
}


