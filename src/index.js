import project from './logic/project';
import task from './logic/task';

// const project = project;
// const todoItem = todoItem;

let p = new project("hey", []);
let i = new task("hi");
i.priority = 2;
let j = new task("hello");
j.priority = 1;
let k = new task("hello");
k.priority = 3;

p.addTask(i);
p.addTask(j);
p.addTask(k);
console.log(p);
p.sortTasks();
// console.log(p);
