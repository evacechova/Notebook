//LOADING DATA FROM LOCAL STORAGE
//1 Loading keys

//2 Loading saved tasks 
let savedTasksKeysArray = [];
console.log(savedTasksKeysArray);

// let savedTask = localStorage.getItem(`Task-data${savedTasksKeysArray[0]}`);
// console.log(savedTask);

//CLASS SETUP FOR TASKS
class Task {
    constructor (argDescription) {
        this.description = argDescription;
    }
};

//MODAL INPUT SELECTION
const taskDescription = document.querySelector("#task__description");
//console.log(taskDescription);

//CREATE DIV UPON CLICKING ON SAVE
const saveTask = document.querySelector("#btn-save");
saveTask.addEventListener("click", () => {
    //console.log(taskDescription.value);
    //1 Create new instance of Task
    const newTask = new Task(taskDescription.value);
    //console.log(newTask);
    //1.11 Convert instance to string before saving to LocalStorage
    let newTaskString = JSON.stringify(newTask);
    //console.log(newTaskString);
    //1.12 Generate a dynamic key number for my string
    function generateKey() {
        return Date.now().toString();
    }
    let keyNumber = generateKey();
    //console.log(keyNumber);
    //1.13 Save the newly generated key to my key array
    savedTasksKeysArray.push(keyNumber);
    //console.log(savedTasksKeysArray);
    let keyArrayString = JSON.stringify(savedTasksKeysArray);
    //console.log(keyArrayString);
    localStorage.setItem(`Task-key-array`, keyArrayString);
    //1.14 Save task to LocalStorage
    localStorage.setItem(`Task-data${keyNumber}`, newTaskString);
});