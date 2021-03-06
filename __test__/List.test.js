import List from '../src/modules/List.js';

const list = new List();

describe('This function ', () => {
  const todoList = [
    {
      description: 'Test File',
      completed: false,
      index: 1,
    },
  ];
  test('adds a list item correctly and check the length', () => {
    list.addList(todoList);
    expect(list.getList().length).not.toBe(0);
  });

  test('adds a list item correctly and return it', () => {
    expect(list.getList()).toStrictEqual(todoList);
  });

  test('deletes a list item correctly', () => {
    list.addList(todoList);

    list.deleteList(0);

    expect(list.getList().length).toBe(0);
  });
});

describe('This function', () => {
  const list = {
    description: 'Test File',
    completed: false,
    index: 1,
  };
  const divList = document.getElementById('dynamic-list');

  divList.innerHTML = ` 
  <li id="${list.index - 1}" class = "todo-list" >
    <div class="list">
      <input type="checkbox" name="${list.index}" id="${
  list.index
}" class="checkbox">
      <label for="${list.index}"><s>${list.description}</s></label>
    </div>
    <button type="button" id= "${list.index - 1}" class="deleteList">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  </li>  
    `;
  test('Mocks HTML to check if you create an LI', () => {
    const listLi = document.querySelectorAll('#dynamic-list li');
    expect(listLi).toHaveLength(1);
  });
  test('Mock Html to check if it delete an LI', () => {
    divList.firstElementChild.remove();
    const listLi = document.querySelectorAll('#dynamic-list li');
    expect(listLi).toHaveLength(0);
  });
});
