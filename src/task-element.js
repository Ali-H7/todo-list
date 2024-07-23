export default function createTaskElement (projectTasks) {
    const tasksElements = document.querySelector("#tasks");

    projectTasks.forEach((task) => {
        task.displayed = true; 
        const taskDiv = document.createElement("div");
        const checkBox = document.createElement("div");
        const label = document.createElement("label");
        const note = document.createElement("p");
        const date = document.createElement("h5");

        taskDiv.classList.add("task");
        checkBox.setAttribute("type", "checkbox");

        label.textContent = task.taskName;
        note.textContent = task.description;
        date.textContent = task.date;

        tasksElements.appendChild(taskDiv);
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(note);
        taskDiv.appendChild(date);
        }
    );
};