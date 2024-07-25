import { projectList } from ".";
export default function GetUserInputForProject() {
    const ProjectName = document.querySelector("#project-title").value;
    
    // check if another project with the same name exist
    let checkName = projectList.findIndex(item => item.projectName === ProjectName);
    if (checkName == "-1") {
        return ProjectName;
    } else {
        alert("There's another project with this name");
        return;
    }
}