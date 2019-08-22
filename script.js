const toDoList = [];

const form = document.querySelector('.addTask');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('span');
const listItems = document.getElementsByClassName('newTask');
const input = document.querySelector('.task');

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
}

const addTask = (e) => {
    e.preventDefault();
    let titleTask = input.value;
    if (titleTask === "") return;

    const newTask = document.createElement('li');
    newTask.textContent = titleTask;
    newTask.className = 'newTask';
    toDoList.push(newTask);
    renderList();

    const taskBtn = document.createElement('button');
    newTask.appendChild(taskBtn);
    taskBtn.className = "remove";
    taskBtn.textContent = "X";

    input.value = "";

    taskNumber.textContent = listItems.length;

    newTask.querySelector('.remove').addEventListener('click', removeTask);
}
const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length;
    renderList();
}
const search = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));

}

input.addEventListener('input', search);

form.addEventListener('submit', addTask);