import { projectList } from ".";

export default class storage {
    static store() {
        localStorage.setItem("projectList", JSON.stringify(projectList));
    };

    static retreive() {
        if (localStorage.getItem("projectList") !== null) {
            let storedList = JSON.parse(localStorage.getItem("projectList"));
            return storedList; 
        }
        else return []; 
    };
}