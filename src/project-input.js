import { projectList } from ".";
export default function GetUserInputForProject() {
    const ProjectName = document.querySelector("#project-title").value;
    
    // check if another project with the same name exist
    let checkName = projectList.some(item => item.projectName.toLowerCase() == ProjectName.toLowerCase());

    if (checkName == true) {
        alert("There's another project with this name");
        return false;
    } else if (ProjectName == "") {
        alert("You can't leave the project name empty");
        return false;
    } else {
        document.querySelector("#project-title").value = "";
        return ProjectName;
    }
}