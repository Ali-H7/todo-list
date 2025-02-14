import { projectList } from ".";
import { currentProjectID } from ".";
import { selectedTask } from ".";
import createTaskElement from "./task-element";
export default function editTask () {
            const taskInputName = document.querySelector("#edit-task-name");
            const taskInputDescription = document.querySelector("#edit-task-description");
            const taskInputDate = document.querySelector("#edit-task-date");
            // radio buttons to select priority
            // const taskInputLow = document.querySelector("#edit-low")
            // const taskInputMedium = document.querySelector("#edit-medium")
            // const taskInputHigh = document.querySelector("#edit-high")
            const taskInputcheckBox = document.querySelector("#edit-task-checkbox")
            const tasksElements = document.querySelector("#tasks");
            

            const editBtn = document.querySelector("#edit-confirm-task");
            const editDialog = document.querySelector(".edit-dialog")

            function assignEditedTask (newName, newDescription, newDate, newPriority, newChecklist, projectList, taskID, ProjectID) {
                projectList[ProjectID].tasks[taskID].taskName = newName;
                projectList[ProjectID].tasks[taskID].description = newDescription;
                projectList[ProjectID].tasks[taskID].date = newDate;
                projectList[ProjectID].tasks[taskID].priority = newPriority;
                projectList[ProjectID].tasks[taskID].checklist = newChecklist;
            };

            editBtn.addEventListener("click", ()=> {
                // editDialog.showModal();
                const newName = taskInputName.value
                const newDescription = taskInputDescription.value
                const newDate = taskInputDate.value
                const newPriority = document.querySelector('input[name="edit-priority"]:checked').value;
                const newChecklist = taskInputcheckBox.checked;
                const checkCurrentName = projectList[currentProjectID].tasks[selectedTask].taskName
                let checkName = projectList[currentProjectID].tasks.some(task => task.taskName.toLowerCase() == newName.toLowerCase());

                if (newName == checkCurrentName) {
                    checkName = false;
                    // console.log (checkName);
                }

                if (checkName == true) {
                    console.log(checkName)
                    return alert("There's another task with this name");
                } else if (newName === "") {
                    return alert("You can't leave the project name empty");
                } else if (newDescription === "") {
                    return alert("You can't leave the project Description empty");
                }

                assignEditedTask (newName, newDescription, newDate, newPriority, newChecklist, projectList, selectedTask, currentProjectID)
                tasksElements.innerHTML = "";
                createTaskElement(projectList[currentProjectID].tasks);
                editDialog.close();
            })
}