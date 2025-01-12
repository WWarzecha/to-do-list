import project from './logic/project';
import task from './logic/task';

// const project = project;
// const todoItem = todoItem;

let p = new project("hey", []);
let i = new task("hi");
p.addProject(i);
console.log(p);
