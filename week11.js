
const findInput = document.getElementById('input-1');
const findButton = document.getElementById('button-1');
const findUl = document.getElementById('ul1');

function addTask() {
    const newElement = document.createElement('li');
    const taskText = findInput.value;
    newElement.textContent = taskText;
    findUl.append(newElement);
    findInput.value = '';
}

function checkTask(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
}

findButton.addEventListener('click', addTask);
findUl.addEventListener('click', checkTask);

