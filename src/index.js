import './style.css';
import project from "./project.js";
import task from "./task.js";
import createProjectElement from "./project-element.js";
import createTaskElement from "./task-element";
import GetUserInputForProject from './project-input.js';
import GetUserInputForTask from './task-input.js';
import filter from './filter.js';

filter.display();
export let currentProjectID = 0;
export const projectList = [];
export let currentFilterID = 0;
const tasksElements = document.querySelector("#tasks");

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

createProjectElement(projectList);
createTaskElement(projectList[currentProjectID].tasks);

const dialog = document.querySelector(".project-dialog");
const closeProjectBtn = document.querySelector("#close-project-dialog");
const openProjectBtn = document.querySelector("#open-project");
const addProjectBtn = document.querySelector("#add-project");


openProjectBtn.addEventListener("click", ()=> {
    dialog.showModal();
})

closeProjectBtn.addEventListener("click", ()=> {
    dialog.close();
})

addProjectBtn.addEventListener("click", ()=> {
    const newProject = GetUserInputForProject();
    if (newProject === undefined) {
        dialog.close();
        return;
    }
    const createProject = new project(newProject);
    createProject.addProjectToList(projectList);
    createProjectElement(projectList);
    dialog.close();
})

const taskDialog = document.querySelector(".task-dialog");
const addTaskBtn = document.querySelector("#add-task-btn"); 

addTaskBtn.addEventListener("click", ()=> {
    taskDialog.showModal();
})

const confirmTaskBtn = document.querySelector("#confirm-task"); 

confirmTaskBtn.addEventListener("click", ()=> {
    tasksElements.innerHTML = "";
    const {taskName, taskDescription, taskDate, taskPriority, taskChecked} = GetUserInputForTask();
    const createTask = new task(taskName, taskDescription, taskDate, taskPriority, taskChecked);
    createTask.addTaskToProject(projectList, currentProjectID);
    createTaskElement(projectList[currentProjectID].tasks);
    taskDialog.close();
})