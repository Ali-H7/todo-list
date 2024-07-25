import createTaskElement from "./task-element";
import { currentProjectID } from ".";
import { projectList } from ".";

export default function createProjectElement(projectList) {
    const projectEle = document.querySelector(".projects");
    // const mainContent = document.querySelector(".main")
    const tasksElements = document.querySelector("#tasks");
    const nameElement = document.querySelector("#project-name");
    projectList.forEach((project, i) => {
    console.log(project);
    if (project.displayed) {
        return; 
    } else {
        const name = project.projectName;
        const li = document.createElement("li");
        const div = document.createElement("div");
        const hashtag = document.createElement("i");
        const deleteIcon = document.createElement("i");
        project.displayed = true; 

        hashtag.classList.add("fa-solid")
        hashtag.classList.add("fa-hashtag")
        deleteIcon.classList.add("fa-regular")
        deleteIcon.classList.add("fa-trash-can")
        li.setAttribute("data-name", name);
        
        div.innerHTML = hashtag.outerHTML + " " + name;
        li.appendChild(div);

        if (name !== "Default") {
            li.appendChild(deleteIcon);
        }
        
        projectEle.appendChild(li)

        div.addEventListener("click", (e) => {
            currentProjectID = i; 
            nameElement.innerHTML = name + " " + "Project";
            tasksElements.innerHTML = "";
            createTaskElement(project.tasks);
        })

        deleteIcon.addEventListener("click", () => {
            tasksElements.innerHTML = "";
            li.remove();
            const currentIndex = projectList.findIndex(item => item.projectName === name);
            console.log(currentIndex);
            projectList.splice(currentIndex, 1);
            currentProjectID = 0;
            nameElement.innerHTML = projectList[0].projectName + " " + "Project";
            createProjectElement(projectList);
            createTaskElement(projectList[currentProjectID].tasks);
            console.log(projectList);
        })
    }
});
}