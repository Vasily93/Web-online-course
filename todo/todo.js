// var todos = [];

// window.setTimeout(()=>{
//     var input = prompt('What do you wanna do?');
//     while(input !== 'quit') {
    
//         if(input === 'list') {
//             todos.forEach((todo,index)=> {
//                 console.log('***')
//                 console.log(index+ '. ' +todo )
//                 console.log('***')
//             })
//         } else if(input === 'new') {
//             var newTodo = prompt('what is new')
//             todos.push(newTodo)  
//         } else if(input === 'delete') {
//             var todoI = prompt('which one?')
//             todos.splice(todoI, 1)
//             console.log(todos)
//         }
        
//         var input = prompt('What do you wanna do?');
//     }
//     console.log('yout are done')

// }, 1000)

var lis = document.querySelectorAll('li');

for(let i=0; i<lis.length;i++) {
    lis[i].addEventListener('mouseover', function(){
        this.classList.add('selected')
    });

    lis[i].addEventListener('mouseout', function(){
        this.classList.remove('selected')
    });

    lis[i].addEventListener('click', function(){
        this.classList.toggle('done')
    });

}