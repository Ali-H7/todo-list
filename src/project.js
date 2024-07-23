export default class project { 
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = [];
        this.displayed = false; 
    };

    addProjectToList(projectList) {
        projectList.push(this);
    };
};
