import { projectList } from ".";
export default function GetUserInputForProject() {
    const ProjectName = document.querySelector("#project-title").value;
    
    // check if another project with the same name exist
    let checkName = projectList.some(item => item.projectName.toLowerCase() == ProjectName.toLowerCase());
    console.log(checkName);
    if (checkName == true) {
        document.querySelector("#project-title").value = "";
        alert("There's another project with this name");
        return;
    } else {
        document.querySelector("#project-title").value = "";
        return ProjectName;
    }
}