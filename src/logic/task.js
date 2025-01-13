class task{
    constructor(title, description, dueDate, priority){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }
    set title(title){
        this._title = title;
    }
    get title(){
        return this._title;
    }
    set description(description){
        this._description = description;
    }
    get description(){
        return this._description;
    }
    set dueDate(date){
        this._dueDate = date;
    }
    get dueDate(){
        return this._dueDate;
    }
    set priority(priority){
        this._priority = priority;
    }
    get priority(){
        return this._priority;
    }
    static comparator = (a, b) => {
        return (a.priority > b.priority) ? 1 : -1;
    }
};

export default task;