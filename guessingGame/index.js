let max = parseInt(prompt(`Max number`));
let secretNumber = Math.floor(Math.random() * max);
let text = 'Take a guess';
let count = 1;

let num = parseInt(prompt(`${text}`));

while(num !== secretNumber) {
    count++
    if(num < secretNumber) {
        text = 'too low'
    } else {
        text = 'too high'
    }
    num = parseInt(prompt(`${text}`))
}

console.log('yesss!', `count: ${count}`)




