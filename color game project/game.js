var level = 6;

// choose levels
var hard = document.getElementById('hard')
var easy = document.getElementById('easy')
hard.addEventListener("click", function() {
    for(let i=3;i<divs.length;i++) {
        divs[i].style.backgroundColor = generateRandomColors(3)
    }
    generateRandomColors(level)
})
easy.addEventListener("click", function() {
    var colors3 = generateRandomColors(3)
    console.log(colors3)
    var random3 = Math.floor(Math.random() * colors3.length)
    var picked3  = colors3[random3];
    console.log(picked3)
    document.getElementById('picked').innerHTML = picked3;
    for(let i=3;i<divs.length;i++) {
        if(divs[i].style.backgroundColor!==picked3)
        divs[i].style.display = "none"
    }
})

//colors generator
var colors = generateRandomColors(level)

var divs = document.querySelectorAll(".square");
var random = Math.floor(Math.random() * colors.length)
var picked = colors[random];
document.getElementById('picked').innerHTML = picked;
var won = document.getElementById('gotit');
var header = document.getElementById('header');

for(let i=0; i<divs.length; i++) {
    divs[i].style.backgroundColor = colors[i]
    divs[i].addEventListener("click", function() {
        if(this.style.backgroundColor!==picked) {
            divs[i].style.backgroundColor = "black"
        } else {
            won.innerHTML = "You Got This!"
            header.style.backgroundColor = this.style.backgroundColor;
            for(let a=0; a<divs.length; a++) {
                     divs[a].style.backgroundColor = this.style.backgroundColor;
                 }
        }
    })
}

function generateRandomColors(num) {
    var arr = [];
    function randomNum() {
        return Math.floor(Math.random()*255)
    }
    for(let i=0; i<num; i++) {
        var color= "rgb(" + randomNum() +", "+ randomNum()+", "+ randomNum()+")";
        arr.push(color)
    }
    
    return arr;
}
generateRandomColors(6)


//again button
var again = document.getElementById('again')
again.addEventListener('click', function() {
    location.reload()
})













