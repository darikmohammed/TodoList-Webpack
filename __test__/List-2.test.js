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

  test('check if the stauts completed is updated', () => {
    todoList = list.getList();
    todoList[0].completed = true;
    expect(todoList[0].completed).toBe(true);
  });
});
