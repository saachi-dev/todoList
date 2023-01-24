//SELECTORS

var btn = document.getElementById("add-btn");


//EVENT LISTENER 

btn.addEventListener("click", getInput);


const inputDiv = document.createElement('div');
inputDiv.id = 'take-input';
document.getElementById("task-card-parent").append(inputDiv)

const inpField = document.createElement("input");
inpField.setAttribute('type', 'text');
inpField.id = "add-btn-inp";
inputDiv.appendChild(inpField);


var addTask = document.createElement('button');
addTask.id = 'add-task';

addTask.innerHTML = '<i class="fas fa-plus-circle"></i>';
addTask.onclick = getTask;
inputDiv.appendChild(addTask);
inputDiv.style.display = "none"

//FUNCTIONS
function getInput(event) {
    btn.style.display = "none";
    inputDiv.style.display = "flex";
}

function getTask(e) {



    //SELECTING DIV 
    const taskCard = document.getElementById('task-card-ul');

    //CREATING AN LI    
    const taskList = document.createElement('li');
    taskList.id = "task";
    taskList.classList.add("incomplete")
    taskCard.appendChild(taskList);

    //CRAETING CHECKBOX
    const chckbox = "<input type='checkbox' onclick=check(this)>"
    // const chckbox = document.createElement("input");
    // chckbox.setAttribute('type','checkbox');
    // chckbox.id = "task-checkbox";

    // //completing task
    // chckbox.onclick=()=>{
    //     console.log(this)
    //     //if chk
    //     //add completed class
    //     //else
    //     //remove completed class
    // };
    taskList.innerHTML = chckbox;



    //CREATING SPAN TAG
    const spanText = document.createElement('span');
    spanText.id = "task-text";
    spanText.innerHTML = document.getElementById('add-btn-inp').value;
    taskList.appendChild(spanText)

    //CREATING TRASH BUTTON
    const trashBtn = document.createElement('button');
    trashBtn.id = "trash-btn";
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    //deleting the li
    trashBtn.onclick = (e) => {
        e.target.parentElement.remove();
    };
    taskList.appendChild(trashBtn);
    btn.style.display = "block";
    inputDiv.style.display = "none";
    document.getElementById('add-btn-inp').value = "";
}

function check(ele) {

    //if checked
    if (ele.checked) {


        ele.parentElement.classList.remove("incomplete")
        ele.parentElement.classList.add("completed")

    }
    else {
        ele.parentElement.classList.add("incomplete")
        ele.parentElement.classList.remove("completed")
    }
    //
}


//filtering todo logic


function filter(ele) {
    const todos = document.getElementById('task-card-ul').children;
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];
        switch(ele.value)
        
{
    case 'all':

        element.style.display="flex";
        break;

    case 'complete':

    if(element.classList.contains('completed')){
        element.style.display='flex';
    }
    else{
        element.style.display='none';
    }
    break;

    case 'incomplete':
        if(!element.classList.contains('completed')){
            element.style.display='flex';
        }
        else{
            element.style.display='none';
        }
        break;

}

    }
}
