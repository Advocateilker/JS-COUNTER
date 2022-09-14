
let countP = document.getElementById ("count-p")

console.log(countP)

let count = 0

function increase() {

    count = count + 1
    countP.innerText = count
}


function decrease(){
    count = count -1
    countP.innerText = count
}

function reset() {

    countP.innerText = 0

}
