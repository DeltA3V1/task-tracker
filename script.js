const fs = require('fs');
function add(task) {
    fs.writeFileSync('code.json', JSON.stringify(task, null, 2), 'utf8');
    console.log('Task added successfully!');
}
let n = 1;
console.log(n);
console.log('Task Manager');
console.log('Add a new task to the task list');
let task = prompt('Enter your task: ');
console.log('Task:', task);
add(task);
