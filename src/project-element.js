export default function createProjectElement(projectList) {
    const projectEle = document.querySelector(".projects");
    const mainContent = document.querySelector(".main")
    projectList.forEach((project) => {
    console.log(project);
    if (project.displayed) {
        return; 
    } else {
        const name = project.projectName;
        const li = document.createElement("li");
        const hashtag = document.createElement("i");
        project.displayed = true; 

        hashtag.classList.add("fa-solid")
        hashtag.classList.add("fa-hashtag")
        li.setAttribute("data-name", name);
        
        li.appendChild(hashtag);
        li.innerHTML = hashtag.outerHTML + " " + name; 
        projectEle.appendChild(li)

        li.addEventListener("click", (e) => {
            mainContent.innerHTML = ""
        })
    }
});
}