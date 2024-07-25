export default function GetUserInputForTask() {
    const taskName = document.querySelector("#task-name").value;
    const taskDescription = document.querySelector("#task-description").value;
    const taskDate = document.querySelector("#task-date").value;
    const taskPriority = document.querySelector('input[name="priority"]:checked').value;
    const taskChecked = document.querySelector("#task-checkbox").value

    if (!taskChecked) {
        taskChecked = false; 
    }

    document.querySelector("#task-name").value = "";
    document.querySelector("#task-description").value = "";
    document.querySelector("#task-date").value = "";
    document.querySelector('input[name="priority"]:checked').value;
    document.querySelector("#task-checkbox").checked = false;

    return {taskName, taskDescription, taskDate, taskPriority, taskChecked};
}