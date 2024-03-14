//Class for the invidual tasks
class Task {
    constructor (argDescription) {
        this.description = argDescription;
    }
};

//Modal input
const taskDescription = document.querySelector("#task__description");
//console.log(taskDescription);

//Create div on save
const saveTask = document.querySelector("#btn-save");
saveTask.addEventListener("click", () => {
    console.log(taskDescription.value);
    const task1 = new Task(taskDescription.value);
    console.log(task1);
})