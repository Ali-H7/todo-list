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

    editTask (newName, newDescription, newDate, newPriority, newChecklist) {
        this.taskName = newName;
        this.description = newDescription;
        this.date = newDate; 
        this.priority = newPriority;
        this.checklist = newChecklist; 
    };
};