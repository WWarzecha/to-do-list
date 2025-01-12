class project{
    constructor(title, projects){
        this._title = title;
        this._projects = projects;
    }
    set title(title){
        this._title = title;
    }
    get title(){
        return this._title;
    }
    addProject = (project) => {
        this._projects.push(project);
    }
}

export default project