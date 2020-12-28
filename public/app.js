
const addListBtn = document.querySelector(".btn-add-list");
const newListForm = document.querySelector(".new-list-form");
const listNameInput = document.getElementById('list-name-input');
const mainContent = document.querySelector('main');
const listStack = document.querySelector('.list-stack');


addListBtn.addEventListener('click', () => {
    addListBtn.style.display = "none";
    newListForm.style.display = "flex";
    listNameInput.focus();
})

listNameInput.addEventListener('keyup', (e) => {
    if(e.key === 'Escape'){
        addListBtn.style.display = "flex";
        newListForm.style.display = "none";
        listNameInput.value = '';
    }
})

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    //switch displaying
    addListBtn.style.display = "flex";
    newListForm.style.display = "none"

    //creating new list
    const newList = document.createElement('article');
    newList.className = 'task-list';
   
    //-----------------LIST HEADER---------------------
    const newListHeader = createNewListHeader(newList);
        newList.appendChild(newListHeader);

    //--------------TASK WRAPPER-----------------------
    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'task-wrapper';
    newList.appendChild(taskWrapper);
    //-----------TASK CARD--------------------------
    const newTemplateCard = createNewCard('Template card');
        taskWrapper.appendChild(newTemplateCard);
    //-----------TEMPLATE CARD CREATED-----------------------
    
    //---------------ADD TASK FORM----------------------------
    const addTaskForm = document.createElement('form');
    addTaskForm.className = 'add-task-form';
    addTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        addTaskBtn.style.display = 'inline-block';
        addTaskForm.style.display = 'none';
    
        const newCard = createNewCard(formTaskInput.value);
        taskWrapper.append(newCard);
        formTaskInput.value = '';
    })
    //-----------form input-------------------------------
    const formTaskInput = document.createElement('input');
    formTaskInput.setAttribute('type', 'text');
    formTaskInput.className = 'add-task-form-input';
    addTaskForm.appendChild(formTaskInput);
    //-----------form submit-------------------------------
    const formTaskSubmit = document.createElement('input');
    formTaskSubmit.setAttribute('type', 'submit');
    formTaskSubmit.className = 'btn-submit-task';
    addTaskForm.appendChild(formTaskSubmit);

    newList.appendChild(addTaskForm);
    //--------ADD TASK BTN----------------------------------
    const addTaskBtn = createAddTaskBtn(addTaskForm);
    addTaskBtn.addEventListener('click', () => {
        addTaskBtn.style.display = 'none';
        addTaskForm.style.display = 'flex';
        formTaskInput.focus();
    })
        newList.appendChild(addTaskBtn);
    //---------------------------------------------------------
    listStack.appendChild(newList);
});


function createNewListHeader() {
     //--------------HEADER-------------------------------
    //creating new list-header
    const newListHeader = document.createElement('header');
    newListHeader.className = 'task-list-header';
    //creating headers headline
    const newListHeaderHeadline = document.createElement('h1');
    newListHeaderHeadline.classList = 'task-list-name w-full';
    newListHeaderHeadline.appendChild(document.createTextNode(listNameInput.value));
    listNameInput.value = '';
    //appending headline
    newListHeader.appendChild(newListHeaderHeadline);
    //creating delete button 
    const deleteListBtn = document.createElement('button');
    deleteListBtn.className = 'btn-del-list';
    //delete button event listener
    deleteListBtn.addEventListener('click', () => {
    deleteListBtn.parentElement.parentElement.remove();
    })
    //adding button an icon
    const deleteListBtnIcon = document.createElement('i');
    deleteListBtnIcon.classList = 'fas fa-times list-delete-icon';
    deleteListBtn.appendChild(deleteListBtnIcon);
    //appending delete btn to header 
    newListHeader.appendChild(deleteListBtn);
    //----END OF HEADER--------------------------------------------
    
    return newListHeader;
}

function createNewCard(input) {
    const newCard = document.createElement('aside');
    newCard.className = 'task-card';
    //creating the description of the card
    const newCardDesc = document.createElement('p');
    newCardDesc.className = 'task-card-name';
    newCardDesc.appendChild(document.createTextNode(input));
    //desc append
    newCard.appendChild(newCardDesc);
    //creating delete btn for card
    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.className = "btn-del-task";
    //delete card button event listener
    cardDeleteButton.addEventListener('click', () => {
        cardDeleteButton.parentElement.remove();
    })
    //creating btn icon
    const cardDeleteButtonIcon = document.createElement('i');
    cardDeleteButtonIcon.classList = 'card-delete-icon fas fa-times';
    //append icon    
    cardDeleteButton.appendChild(cardDeleteButtonIcon);
    //append button to card 
    newCard.appendChild(cardDeleteButton);

    return newCard;
}

function createAddTaskBtn(target) {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.className = 'btn-add-task';
    const addTaskBtnIcon = document.createElement('i');
    addTaskBtnIcon.classList = 'fas fa-plus add-task-icon';
    addTaskBtn.appendChild(addTaskBtnIcon);

    return addTaskBtn;
}






