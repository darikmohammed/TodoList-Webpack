import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const ulList = document.getElementById('dynamic-list');
const toDoLists = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'Complete to do list project',
    completed: false,
    index: 1,
  },
];

const uploadHtml = () => {
  toDoLists.sort((a, b) => a.index - b.index);
  toDoLists.forEach((list) => {
    if (list.completed) {
      ulList.innerHTML += ` 
                        <li>
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${list.index}" class="checkbox" checked>
                            <label for="${list.index}"><s>${list.description}</s></label>
                          </div>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </li>  
                          `;
    } else {
      ulList.innerHTML += ` 
                        <li>
                          <div class="list">
                            <input type="checkbox" name="${list.index}" id="${list.index}" class="checkbox">
                            <label for="${list.index}">${list.description}</label>
                          </div>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </li>  
                          `;
    }
  });
};

uploadHtml();
