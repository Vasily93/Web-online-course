let command = null;
let todos = [];

while(command !== 'quit') {
    command = prompt('What next?')
    if(command === 'quit') {
        console.log('You are done');
        break;
    }
    if(command === 'new') {
        let newTask = prompt('new task');
        todos.push(newTask);
    } else if(command === 'list') {
        for(todo  of todos) {
            console.log(`${todos.indexOf(todo)} : ${todo}`)
        }
    } else if(command === 'delete') {
        let index = parseInt(prompt('tell me index'));
        console.log(`deleted ${todos[index]}`)
        todos.splice(index, 1);
    }
   


}
