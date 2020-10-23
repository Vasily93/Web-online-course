let secretNumber = 56;
let text = 'Guess a number'
let num = parseInt(prompt(`${text}`));
let count = 1;

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




