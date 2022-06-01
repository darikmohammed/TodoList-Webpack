export default class List {
  constructor() {
    this.todoList = [];
  }

  getList = () => {
    const list = JSON.parse(localStorage.getItem('todoList'));
    if (list) {
      return list;
    }
    return [];
  };

  addList = (todoListData) => {
    localStorage.setItem('todoList', JSON.stringify(todoListData));
  };
  deleteList = (index) => {};
}
