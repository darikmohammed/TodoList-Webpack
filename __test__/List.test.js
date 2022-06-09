import List from '../src/modules/List.js';
// import localStorageMock from './__mock__/localStorage.js';

const list = new List();
// global.localStorage = localStorageMock();
describe('This function ', () => {
  test('adds a list item correctly', () => {
    const todoList = [
      {
        description: 'Test File',
        completed: false,
        index: 1,
      },
    ];

    list.addList(todoList);
    expect(list.getList().length).not.toBe(0);
  });

  test('deletes a list item correctly', () => {
    const todoList = [
      {
        description: 'Test File',
        completed: false,
        index: 1,
      },
    ];

    list.addList(todoList);

    list.deleteList(0);

    expect(list.getList().length).toBe(0);
  });

});
