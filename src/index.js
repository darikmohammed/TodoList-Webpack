import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Sortable from 'sortablejs';
import List from './modules/List.js';

const ulList = document.getElementById('dynamic-list');
let toDoLists = [];
let checkboxes = document.querySelectorAll('.checkbox');

const uploadHtml = () => {
  const local = new List();
  toDoLists = local.getList();
  toDoLists.sort((a, b) => a.index - b.index);
  if (toDoLists.length) {
    ulList.innerHTML = '';
    toDoLists.forEach((list) => {
      if (list.completed) {
        ulList.innerHTML += ` 
                        <li id="${list.index - 1}" class = "todo-list" >
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${
  list.index
}" class="checkbox" checked>
                            <label for="${list.index}"><s>${
  list.description
}</s></label>
                          </div>
                          <button type="button" id= "${
  list.index - 1
}" class="deleteList">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </li>  
                          `;
      } else {
        ulList.innerHTML += ` 
                        <li id="${list.index - 1}" class = "todo-list" >
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${
  list.index
}" class="checkbox">
                            <label for="${list.index}">${
  list.description
}</label>
                          </div>
                          <button type="button" id= "${
  list.index - 1
}" class="deleteList">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </li>  
                          `;
      }
    });
  } else {
    ulList.innerHTML = '<li>No Task to Preview. Add New Todo list!</li>';
  }

  // eventlistener for editing
  const listLi = document.querySelectorAll('.todo-list');
  listLi.forEach((list) => {
    list.addEventListener('dblclick', () => {
      const localList = new List();
      const todoListsLocal = localList.getList();
      const editId = list.getAttribute('id') * 1;
      list.innerHTML = `
     <form action= "#" class= "edit-form" id= "edit${editId}"> 
       <div>
         <i class="fa-solid fa-pen-to-square"></i>
         <input type="text" id="input-edit${editId}" value="${todoListsLocal[editId].description}">
       </div>
       <button type ="submit" > <i class="fa-solid fa-check"></i></button>
     </form>
     <div></div>
     `;
      const editForm = document.querySelector(`#edit${editId}`);
      editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const editValue = document.querySelector(`#input-edit${editId}`);
        localList.editTask(editId, editValue.value);
        uploadHtml();
      });
    });
  });
  // eventlistener for checkbox
  checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const localList = new List();
      const listId = checkbox.getAttribute('id');
      const todoListLocal = localList.getList();
      if (checkbox.checked) {
        todoListLocal[listId - 1].completed = true;
      } else {
        todoListLocal[listId - 1].completed = false;
      }
      localList.addList(todoListLocal);
      uploadHtml();
      checkboxes = document.querySelectorAll('.checkbox');
    });
  });
  // eventlistener for deleteBtn
  const buttons = document.querySelectorAll('.deleteList');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const localList = new List();
      const buttonId = button.getAttribute('id');
      localList.deleteList(buttonId * 1);
      uploadHtml();
    });
  });

  //   //drag and drop event listeners

  const listContainer = document.querySelector('#dynamic-list');
  Sortable.create(listContainer, {
    onEnd() {
      const liList = document.querySelectorAll('.todo-list');
      const listArray = [];
      const listClass = new List();
      liList.forEach((list) => {
        listArray.push(list.getAttribute('id') * 1);
      });
      listClass.reorder(listArray);
      uploadHtml();
    },
  });
};

uploadHtml();

const form = document.querySelector('#list-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const localList = new List();
  const value = document.querySelector('#add-list');
  const todoListLocal = localList.getList();
  const addList = {
    description: value.value,
    completed: false,
    index: todoListLocal.length + 1,
  };

  todoListLocal.push(addList);
  localList.addList(todoListLocal);
  value.value = '';
  uploadHtml();
});

const deleteChecked = document.querySelector('.delete-checked');

deleteChecked.addEventListener('click', () => {
  const localList = new List();
  localList.deleteCompleted();
  uploadHtml();
});

const refresh = document.querySelector('.refresh-list');

refresh.addEventListener('click', () => {
  uploadHtml();
});

export default uploadHtml;
