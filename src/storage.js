import { projectList } from ".";
import project from "./project";
import task from "./task";

export default class storage {
    static store() {
        localStorage.setItem("projectList", JSON.stringify(projectList));
    };

    static retreive() {
        if (localStorage.getItem("projectList") !== null) {
            let storedList = JSON.parse(localStorage.getItem("projectList"));
            storedList.forEach((project) => projectList.push(project));
        }

        else {
            const defaultProject = new project("Default"); 
            defaultProject.addProjectToList(projectList);
            const testProject = new project("Test"); 
            testProject.addProjectToList(projectList);

            const task1 = new task("Finish Report", "Complete the monthly sales report by EOD.", "2024-07-24", "high", true);
            task1.addTaskToProject(projectList, 0);
            const task2 = new task("Buy Groceries", "Pick up milk, bread, and eggs.", "2024-07-25", "low", false);
            task2.addTaskToProject(projectList, 0);
            const task3 = new task("Water the Plants", "Need to give the plants a good soak.", "2024-07-26", "medium", false);
            task3.addTaskToProject(projectList, 1);
            const task4 = new task("Take Medication", "Take daily dose of medication at 8:00 AM.", "2024-07-27", "high", true);
            task4.addTaskToProject(projectList, 1);
        }
    };
}