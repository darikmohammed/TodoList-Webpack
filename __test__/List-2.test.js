import List from '../src/modules/List.js';

const list = new List();

describe('This function', () => {
  let todoList = [
    {
      description: 'Test File',
      completed: false,
      index: 1,
    },
  ];
  list.addList(todoList);
  test('checks if the description is updated', () => {
    list.editTask(0, 'New value test');

    todoList = list.getList();

    expect(todoList[0].description).toBe('New value test');
  });

  test('checks if the status completed is updated', () => {
    todoList = list.getList();
    todoList[0].completed = true;
    expect(todoList[0].completed).toBe(true);
  });

  test('deletes the completed items', () => {
    todoList = list.getList();
    todoList[0].completed = true;

    list.addList(todoList);

    list.deleteCompleted();

    expect(list.getList().length).toBe(0);
  });
});

describe('This function', () => {
  let todoList = [
    {
      description: 'Test File',
      completed: false,
      index: 1,
    },
  ];

  test('edit the DOM element for description', () => {
    list.addList(todoList);

    list.editTask(0, 'New value test');

    todoList = list.getList();

    const divList = document.getElementById('dynamic-list');
    divList.innerHTML = ` 
  <li id="${todoList[0].index - 1}" class = "todo-list" >
    <div class="list">
      <input type="checkbox" name="${todoList[0].index}" id="${
  todoList[0].index
}" class="checkbox">
      <label for="${todoList[0].index}">${todoList[0].description}</label>
    </div>
    <button type="button" id= "${todoList[0].index - 1}" class="deleteList">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  </li>  
    `;
    const listLi = document.querySelector('.list label');
    expect(listLi.textContent).toBe('New value test');
  });

  test('deletes edit the element from the dom', () => {
    todoList = list.getList();
    todoList[0].completed = true;

    list.addList(todoList);

    list.deleteCompleted();

    const divList = document.getElementById('dynamic-list');
    divList.innerHTML = ` 
  <li id="${todoList[0].index - 1}" class = "todo-list" >
    <div class="list">
      <input type="checkbox" name="${todoList[0].index}" id="${
  todoList[0].index
}" class="checkbox">
      <label for="${todoList[0].index}">${todoList[0].description}</label>
    </div>
    <button type="button" id= "${todoList[0].index - 1}" class="deleteList">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  </li>  
    `;

    divList.firstElementChild.remove();

    const listLi = document.querySelectorAll('#dynamic-list li');
    expect(listLi).toHaveLength(0);
  });

  test('', () => {
    list.addList(todoList);
    todoList = list.getList();
    todoList[0].completed = true;
    list.addList(todoList);

    const divList = document.getElementById('dynamic-list');

    divList.innerHTML = ` 
  <li id="${list.index - 1}" class = "todo-list" >
    <div class="list">
      <input type="checkbox" name="${list.index}" id="${
  list.index
}" class="checkbox ${todoList[0].completed}">
      <label for="${list.index}"><s>${list.description}</s></label>
    </div>
    <button type="button" id= "${list.index - 1}" class="deleteList">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  </li>  
    `;

    const listLi = document.querySelector('.checkbox');
    expect(listLi.className).toBe('checkbox true');
  });
});
