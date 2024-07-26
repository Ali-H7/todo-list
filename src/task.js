export default class task {
    constructor (taskName, description, date, priority, checklist) {
        this.taskName = taskName;
        this.description = description;
        this.date = date; 
        this.priority = priority;
        this.checklist = checklist; 
        this.displayed = false;
    };

    addTaskToProject(projectList, projectIndex) {
        projectList[projectIndex].tasks.push(this);
    };

    
};