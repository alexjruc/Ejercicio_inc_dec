const hh = document.querySelector(".hh")
const incre = document.querySelector(".incre")
const decre = document.querySelector(".decre")
const reset = document.querySelector(".reset")
let count = 0
hh.textContent = count

function colorNumber() {
    if (count >= 0) hh.style.color = '#000'
    if(count >= 5) hh.style.color = "blue"
    if(count >= 10) hh.style.color = "red"
}

incre.addEventListener("click", function(){
    count++
    hh.textContent = count

    colorNumber();
})


decre.addEventListener("click", function(){
    if (count > 0){
        count --
        hh.textContent= count
    }
    colorNumber();
})


reset.addEventListener("click", function(){
    count = 0
    hh.textContent = count
    colorNumber();
})
