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
const filterBtn = document.getElementById('menu');

filterBtn.addEventListener('click', (e) => {

    const todos = document.getElementById('task-card-ul').children;
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];
        if (element.classList.contains('incomplete')) {
            element.style.display = 'none';
        }

    }



})











//logic for filtering todo: daddy btayenge


//delete and complete logic

// function deleteCheck(e){
// const item =e.target;

// //delete
// if(item.classList[0]==='tarsh-btn'){
//  item.parentElement.remove();
// }
// //complete
// if(item.classList[0]==='task-checkbox'){
//     item.parentElement.toggel('completed');
//    }
// }





//spare code

// switch(e.target.value)
// {
//     case 'all':

//         todo.style.display="flex ";
//         break;̥

//     case 'complete':

//     if(todo.classList.contains('completed')){
//         todo.style.display='flex';
//     }
//     else{
//         todo.style.display='none';
//     }
//     break;

//     case 'incomplete':
//         if(!todo.classList.contains('completed')){
//             todo.style.display='flex';
//         }
//         else{
//             todo.style.display='none';
//         }
//         break;

// }