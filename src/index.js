import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import List from './modules/List.js';

const ulList = document.getElementById('dynamic-list');
let toDoLists = [];
let checkboxes = document.querySelectorAll('.checkbox');

const uploadHtml = () => {
  const local = new List();
  toDoLists = local.getList();
  toDoLists.sort((a, b) => a.index - b.index);
  ulList.innerHTML = '';
  toDoLists.forEach((list) => {
    if (list.completed) {
      ulList.innerHTML += ` 
                        <li>
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${
        list.index
      }" class="checkbox" checked>
                            <label for="${list.index}"><s>${
        list.description
      }</s></label>
                          </div>
                          <button type="button" class= "${list.index - 1}">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </li>  
                          `;
    } else {
      ulList.innerHTML += ` 
                        <li>
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${
        list.index
      }" class="checkbox">
                            <label for="${list.index}">${
        list.description
      }</label>
                          </div>
                          <button type="button" class= "${list.index - 1}">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </li>  
                          `;
    }
  });
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
