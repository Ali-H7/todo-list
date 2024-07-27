import './style.css';
import project from "./project.js";
import task from "./task.js";
import createProjectElement from "./project-element.js";
import createTaskElement from "./task-element";
import GetUserInputForProject from './project-input.js';
import GetUserInputForTask from './task-input.js';
import filter from './filter.js';
import storage from './storage.js';
import editTask from './task-edit.js';


export let currentProjectID = 0;
export const projectList = [];
filter.display();
storage.retreive();
export let currentFilterID = 0;
export let selectedTask = 0; 
const tasksElements = document.querySelector("#tasks");


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
    if (newProject === false) return;
    const createProject = new project(newProject);
    createProject.addProjectToList(projectList);
    createProjectElement(projectList);
    dialog.close();
})

const taskDialog = document.querySelector(".task-dialog");
const addTaskBtn = document.querySelector(".add-task");
const taskCloseBtn = document.querySelector("#close-task-dialog");

addTaskBtn.addEventListener("click", ()=> {
    taskDialog.showModal();
})

taskCloseBtn.addEventListener("click", ()=> {
    taskDialog.close();
})
const confirmTaskBtn = document.querySelector("#confirm-task"); 

confirmTaskBtn.addEventListener("click", (e)=> {
    const newTask = GetUserInputForTask();
    if (newTask === false) return; 
    const {taskName, taskDescription, taskDate, taskPriority, taskChecked} = newTask
    tasksElements.textContent = "";
    const createTask = new task(taskName, taskDescription, taskDate, taskPriority, taskChecked);
    createTask.addTaskToProject(projectList, currentProjectID);
    createTaskElement(projectList[currentProjectID].tasks);
    taskDialog.close();
})

const editDialog = document.querySelector(".edit-dialog")
const editCloseBtn = document.querySelector("#close-edit-dialog");

editCloseBtn.addEventListener("click", ()=> {
    editDialog.close();
})

editTask();


