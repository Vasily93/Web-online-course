// var byId = document.getElementById("first");
// console.log(byId)
// var byTag = document.getElementsByTagName("p")[0];
// console.log(byTag)
// var byClass = document.getElementsByClassName("spacial")[0];
// console.log(byClass)
// var byQuery = document.querySelector(".spacial");
// console.log(byQuery)


var button = document.getElementById("button");
var div = document.getElementById("body");

function changeColor() {
   div.classList.toggle("blue") 
}

button.addEventListener("click", changeColor)