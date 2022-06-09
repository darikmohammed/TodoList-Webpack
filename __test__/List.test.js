import List from '../src/modules/List.js';
// import localStorageMock from './__mock__/localStorage.js';

const list = new List();
// global.localStorage = localStorageMock();

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
