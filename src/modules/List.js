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

  deleteList = (index) => {
    if (index !== null) {
      const list = this.getList();

      const listRemoved = list.filter((item, key) => {
        if (key !== index) {
          return true;
        }

        return null;
      });
      this.addList(listRemoved);
      this.arrengeStorage();
    }
  };

  deleteCompleted = () => {
    const lists = this.getList();
    const listRemoved = lists.filter((item) => {
      if (item.completed) {
        return null;
      }
      return item;
    });
    this.addList(listRemoved);
    this.arrengeStorage();
  };

  arrengeStorage = () => {
    const lists = this.getList();
    let index = 1;
    lists.forEach((list) => {
      list.index = index;
      index += 1;
    });
    this.addList(lists);
  };

  editTask = (index, value) => {
    const lists = this.getList();
    lists[index].description = value;
    this.addList(lists);
  };

  reorder = (newOrder) => {
    const newArray = [];
    const prevArray = this.getList();
    for (let i = 0; i < prevArray.length; i += 1) {
      newArray[i] = prevArray[newOrder[i]];
    }
    this.addList(newArray);
    this.arrengeStorage();
  };
}
