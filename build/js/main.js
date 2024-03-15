//Loading previously saved data from LocalStorage
let savedTasksKeysArray = [];

let savedTask = localStorage.getItem(`Task-data${savedTasksKeysArray[i]}`);

//Class set up for the invidual tasks
class Task {
    constructor (argDescription) {
        this.description = argDescription;
    }
};

//Modal input selection
const taskDescription = document.querySelector("#task__description");
//console.log(taskDescription);

//Create div on save
const saveTask = document.querySelector("#btn-save");
saveTask.addEventListener("click", () => {
    //console.log(taskDescription.value);
    //1 Create new instance of Task
    const newTask = new Task(taskDescription.value);
    //console.log(newTask);
    //1.11 Convert instance to string before saving to LocalStorage
    let newTaskString = JSON.stringify(newTask);
    console.log(newTaskString);
    //1.12 Generate a dynamic key number for my string and save it to my key array
    function generateKey() {
        return Date.now().toString();
    }
    let keyNumber = generateKey();
    savedTasksKeysArray.push(keyNumber);
    //console.log(savedTasksKeysArray);
    //console.log(keyNumber);
    //1.13 Save to LocalStorage
    localStorage.setItem(`Task-data${keyNumber}`, newTaskString);
});