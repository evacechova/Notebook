//RETRIEVING DATA FROM LOCAL STORAGE
//1 Loading keys
let savedTasksKeysArray = JSON.parse(localStorage.getItem(`Task-key-array`));

console.log(savedTasksKeysArray);

//2 Creating a saved tasks array and loading data from LocalStorage into it 
let savedTasksString = [];
console.log(savedTasksString);

for (let i = 0; i < savedTasksKeysArray.length; i++){
    savedTasksString.push(localStorage.getItem(`Task-data${savedTasksKeysArray[i]}`));
    //console.log(savedTasksString);
}
//3 Converting task strings back to objects
let savedTasksObjects = savedTasksString.map((e) => JSON.parse(e));
console.log(savedTasksObjects);

//CREATING DIVS FROM LOCALSTORAGE DATA
//select task-list
const taskListDiv = document.querySelector(".task-list");
//function for creating new divs
function createDiv() {
    //task wrapper div
    const taskListItem = document.createElement("div");
    taskListItem.classList.add("task-list__item");
    //wrapper div contents
        //1 checkbox
        const itemCheckbox = document.createElement("input");
        itemCheckbox.appendChild(taskListItem);
        itemCheckbox.classList.add("task-list__checkbox");
        itemCheckbox.type = "checkbox";
        //2 description
        const itemDescription = document.createElement("p");
        itemDescription.appendChild(taskListItem);
        itemDescription.classList.add("task-list__description");
        //itemDescription.textContent = savedTasksObjects[3].description;
        //3 delete button
        const itemDelete = document.createElement("button");
        itemDelete.appendChild(taskListItem);
        itemDelete.classList.add("task-list__delete");
        itemDelete.type = "button";
        itemDelete.textContent = "X";

        taskListDiv.appendChild(itemCheckbox);
        taskListDiv.appendChild(itemDescription);
        taskListDiv.appendChild(itemDelete);
};
//savedTasksObjects.forEach((task) => );


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

    createDiv();

});