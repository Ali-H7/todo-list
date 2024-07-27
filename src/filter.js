import { isToday, isThisWeek } from "date-fns";
import { currentFilterID } from ".";
import createTaskElement from "./task-element";
import { projectList } from ".";
import { currentProjectID } from ".";

export default class filter { 
    static filters = []; 
    constructor(filterName) {
        this.filterName = filterName;
    };

    addFilter(filterlist) {
        filterlist.push(this.filterName);
    };

    static createFilterElements(filterlist){
        filterlist.forEach((filter, i) => {
            const filterListElement = document.querySelector(".filter");
            const filterLi = document.createElement("li");
            const filterIcon = document.createElement("i");
            const filterElement = document.createElement("div");

            filterIcon.classList.add("fa-solid")
            
            switch(filter) {
                case "All":
                  filterIcon.classList.add("fa-calendar-days");
                  break;
                case "Today":
                  filterIcon.classList.add("fa-calendar-day");
                  break;
                case "This Week":
                  filterIcon.classList.add("fa-calendar-week");
                  break;
                case "Important":
                  filterIcon.classList.add("fa-calendar-xmark");
                  break;
                case "Completed":
                  filterIcon.classList.add("fa-calendar-check");
                  break;
              }

            filterElement.textContent = filter;

            filterLi.addEventListener ("click", ()=> {
                const tasksElement = document.querySelector("#tasks")
                tasksElement.textContent = ""; 
                currentFilterID = i; 
                createTaskElement(projectList[currentProjectID].tasks);
            })
            filterListElement.appendChild(filterLi);
            filterLi.appendChild(filterIcon)
            filterLi.appendChild(filterElement)
          });
    }

    static display () {
        const allFilter = new filter("All");
        allFilter.addFilter(filter.filters);
        const todayFilter = new filter("Today");
        todayFilter.addFilter(filter.filters);
        const weeklyFilter = new filter("This Week");
        weeklyFilter.addFilter(filter.filters);
        const importantFilter = new filter("Important");
        importantFilter.addFilter(filter.filters);
        const completedFilter = new filter("Completed");
        completedFilter.addFilter(filter.filters);
        filter.createFilterElements(filter.filters);
    }

    static filterList (taskstoFilter, filterID) {
        let filteredList;
        if (filterID == 1){
            filteredList = taskstoFilter.filter(filteredTask => {
                return isToday(filteredTask.date)
            })
        } else if (filterID == 2) {
            filteredList = taskstoFilter.filter(filteredTask => {
                return isThisWeek(filteredTask.date);
            })
        } else if (filterID == 3) {
            filteredList = taskstoFilter.filter(filteredTask => {
                return filteredTask.priority === "high";
            })
        } else if (filterID == 4) {
            filteredList = taskstoFilter.filter(filteredTask => {
                return filteredTask.checklist === true;
            })
        } else if (filterID == 0) {
            filteredList = taskstoFilter; 
        }
        return filteredList;
    }
        
};
