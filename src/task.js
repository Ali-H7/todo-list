class task {
    constructor (taskName, description, date, priority, note, checklist) {
        this.taskName = taskName;
        this.description = description;
        this.date = date; 
        this.priority = priority;
        this.note = note;
        this.checklist = checklist; 
    };

    addTaskToProject(projectIndex) {
        projectList[projectIndex].tasks.push(this);
    };
};