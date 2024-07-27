import { projectList } from ".";
import { currentProjectID } from ".";

export default function GetUserInputForTask() {
    const taskName = document.querySelector("#task-name").value;
    const taskDescription = document.querySelector("#task-description").value;
    const taskDate = document.querySelector("#task-date").value;
    let taskPriority = document.querySelector('input[name="priority"]:checked');
    const taskChecked = document.querySelector("#task-checkbox").value
    
    let checkName = projectList[currentProjectID].tasks.some(task => task.taskName.toLowerCase() == taskName.toLowerCase());

    if (taskPriority !== null) {
        taskPriority = taskPriority.value;
    }

    if (!taskChecked) {
        taskChecked = false; 
    }

    if (checkName == true) {
        alert("There's another task with this name");
        return false;
    } else if (taskName === "") {
        alert("You can't leave the project name empty");
        return false;
    } else if (taskDescription === "") {
        alert("You can't leave the project Description empty");
        return false;
    } else if (taskDate === "") {
        alert("Please select the due date for your task");
        return false;
    } else if (taskPriority === null) {
        alert("Please select the Priority for your task");
        return false;
    } else {
        document.querySelector("#task-name").value = "";
        document.querySelector("#task-description").value = "";
        document.querySelector("#task-date").value = "";
        document.querySelector('input[name="priority"]:checked').value;
        document.querySelector("#task-checkbox").checked = false;

    return {taskName, taskDescription, taskDate, taskPriority, taskChecked};
    };

    
};