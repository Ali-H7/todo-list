import './style.css';
import project from "./project.js";
import task from "./task.js";
import createProjectElement from "./project-element.js";

const projectList = []; 


const defaultProject = new project("Default"); 
defaultProject.addProjectToList(projectList);

const testProject = new project("Test"); 
testProject.addProjectToList(projectList);

const task1 = new task("Finish Report", "Complete the monthly sales report by EOD.", "2024-07-24", "High", false);
task1.addTaskToProject(projectList, 0);
const task2 = new task("Buy Groceries", "Pick up milk, bread, and eggs.", "2024-07-22", "Low", true);
task2.addTaskToProject(projectList, 0);
const task3 = new task("Water the Plants", "Need to give the plants a good soak.", "2024-07-24", "High", false);
task3.addTaskToProject(projectList, 1);
const task4 = new task("Take Medication", "Take daily dose of medication at 8:00 AM.", "2024-07-24", "High", true);
task4.addTaskToProject(projectList, 1);

const dialog = document.querySelector(".project-dialog");
const addProjectBtn = document.querySelector("#add-project");


addProjectBtn.addEventListener("click", ()=> {
    dialog.showModal();
})

createProjectElement(projectList);
