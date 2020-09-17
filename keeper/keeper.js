//buttons
var buttons = document.getElementsByTagName("button");
var but1 = buttons[0]
var but2 = buttons[1]
var reset = buttons[2]

//scores
var scores = document.getElementsByTagName("div");
var num1 = 0;
scores[0].innerHTML=num1;
var num2 = 0;
scores[1].innerHTML=num2;

var gameOver = false;
var till = document.getElementById('till')

//input
var numInput = document.querySelector("input[type='number']")
numInput.addEventListener("change", function() {
    till.innerHTML= numInput.value;
})

//buttons listeners
but1.addEventListener("click", function() {
    if(!gameOver) {
        num1++;
        if(num1===Number(till.innerHTML)) {
            gameOver=true;
            scores[0].classList.toggle("green")
        }
        scores[0].textContent=num1;
    }
})

but2.addEventListener("click", function() {
    if(!gameOver) {
        num2++;
        if(num2===Number(till.innerHTML)) {
            gameOver=true;
            scores[1].classList.toggle("green")
        }
        scores[1].textContent=num2;
    }
})

reset.addEventListener("click", function() {
    scores[1].classList.remove("green")
    scores[0].classList.remove("green")
    scores[1].innerHTML=0
    scores[0].innerHTML=0
    num1=0;
    num2=0;
    gameOver=false

})



