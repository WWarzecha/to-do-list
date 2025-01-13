import Task from './task'

class project{
    constructor(title, tasks = []){
        this._title = title;
        this._tasks = tasks;
    }
    set title(title){
        this._title = title;
    }
    get title(){
        return this._title;
    }
    addTask = (task) => {
        this._tasks.push(task);
    }
    sortTasks = () => {
        this._tasks.sort(Task.comparator);
    }
}

export default project