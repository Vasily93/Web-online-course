let max = parseInt(prompt(`Max number`));
let secretNumber = Math.floor(Math.random() * max);
let count = 1;

let text = 'Take a guess';
let num = prompt(`${text}`);

while(parseInt(num) !== secretNumber) {
    count++
    if(num == 'q') {
        console.log(`you gave up. it was ${secretNumber}`)
        break;
    }    
    if(num < secretNumber) {
        text = 'too low'
    } else {
        text = 'too high'
    }
    num = prompt(`${text}`)
}

console.log( `count: ${count}`)




