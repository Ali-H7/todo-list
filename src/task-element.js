import { currentProjectID } from ".";
import { projectList } from ".";
import { format } from "date-fns";
import filter from "./filter";
import { currentFilterID } from ".";
import { isToday, isThisWeek } from "date-fns";

export default function createTaskElement (projectTasks) {
    const tasksElements = document.querySelector("#tasks");
    const editDialog = document.querySelector(".edit-dialog")
    const filteredTasks = filter.filterList(projectTasks, currentFilterID);
    filteredTasks.forEach((task, i) => {
        task.displayed = true; 
        const formattedDate = format(new Date(task.date), "iiii do MMMM u");
        const taskDiv = document.createElement("div");
        const iconsDiv = document.createElement("div");
        const iconsDiv2 = document.createElement("div");
        const iconsDiv3 = document.createElement("div");
        const checkBox = document.createElement("input");
        const label = document.createElement("label");
        const note = document.createElement("p");
        const date = document.createElement("h5");
        const editIcon = document.createElement("i");
        const deleteIcon = document.createElement("i");

        switch (task.priority) {
            case "low": 
            taskDiv.classList.add("task");
            taskDiv.classList.add("low");
            break;
            case "medium": 
            taskDiv.classList.add("task");
            taskDiv.classList.add("medium");
            break;
            case "high": 
            taskDiv.classList.add("task");
            taskDiv.classList.add("high");
            break;
        }
        iconsDiv.classList.add("task-icons");
        editIcon.classList.add("fa-regular");
        editIcon.classList.add("fa-pen-to-square");
        deleteIcon.classList.add("fa-regular");
        deleteIcon.classList.add("fa-square-minus");
        // taskDiv.classList.add("task");
        checkBox.setAttribute("type", "checkbox");
        label.setAttribute("for", `checkbox${i}`);
        checkBox.setAttribute("id", `checkbox${i}`);
        if (task.checklist){
            checkBox.checked = true;
        } else {
            checkBox.checked = false;
        }
        label.textContent = task.taskName;
        note.textContent = task.description;
        date.textContent = formattedDate;

        tasksElements.appendChild(taskDiv);
        taskDiv.appendChild(iconsDiv);
        iconsDiv.appendChild(iconsDiv2);
        iconsDiv.appendChild(iconsDiv3);
        iconsDiv2.appendChild(checkBox);
        iconsDiv2.appendChild(label);
        iconsDiv3.appendChild(editIcon);
        iconsDiv3.appendChild(deleteIcon);
        taskDiv.appendChild(note);
        taskDiv.appendChild(date);

        checkBox.addEventListener("click", ()=> {
            if (checkBox.checked){
                task.checklist = true;
            } else {
                task.checklist = false;
            }
            tasksElements.textContent = "";
            createTaskElement(projectList[currentProjectID].tasks);
        })

        deleteIcon.addEventListener("click", ()=> {
            tasksElements.textContent = "";
            const currentIndex = projectTasks.findIndex(item => item.taskName === task.taskName);
            projectTasks.splice(currentIndex, 1);
            createTaskElement(projectList[currentProjectID].tasks);
        })

        editIcon.addEventListener("click",()=> {
            const taskInputName = document.querySelector("#edit-task-name");
            const taskInputDescription = document.querySelector("#edit-task-description");
            const taskInputDate = document.querySelector("#edit-task-date");
            // radio buttons to select priority
            const taskInputLow = document.querySelector("#edit-low")
            const taskInputMedium = document.querySelector("#edit-medium")
            const taskInputHigh = document.querySelector("#edit-high")
            const taskInputcheckBox = document.querySelector("#edit-task-checkbox")

            taskInputName.setAttribute("value", task.taskName);
            taskInputDescription.setAttribute("value", task.description);
            taskInputDate.setAttribute("value", task.date);

            switch (task.priority){
                case "low":
                    taskInputLow.checked = true;
                    break;
                case "medium":
                    taskInputMedium.checked = true;
                    break;
                case "high":
                    taskInputHigh.checked = true;
                    break;
            }

            switch (task.checklist){
                case true:
                    taskInputcheckBox.checked = true;
                    break;
                case false:
                    taskInputcheckBox.checked = false;
                    break;
            }
            const editBtn = document.querySelector("#edit-confirm-task");
            editDialog.showModal();
            editBtn.addEventListener("click", ()=> {
                const newName = taskInputName.value
                const newDescription = taskInputDescription.value
                const newDate = taskInputDate.value
                const newPriority = document.querySelector('input[name="edit-priority"]:checked').value;
                const newChecklist = taskInputcheckBox.checked;
                task.editTask (newName, newDescription, newDate, newPriority, newChecklist)
                tasksElements.innerHTML = "";
                createTaskElement(projectList[currentProjectID].tasks);
                editDialog.close();
            })
        })
        }
    );
};