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

  test(' and deletes the completed items', () => {
    todoList = list.getList();
    todoList[0].completed = true;

    list.addList(todoList);
    
    list.deleteCompleted();


    expect(list.getList().length).toBe(0);
  });
});
