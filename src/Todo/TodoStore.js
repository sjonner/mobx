import { observable, action, computed } from 'mobx';

export default class TodoStore {
  todos = observable.map({});
  seed = 0;

  @computed get openTodos() {
    return this.todos.values().filter(todo => !todo.done);
  }

  @computed get allTodos() {
    return this.todos.values();
  }

  @computed get doneCount() {
      return this.todos.values().filter(todo => todo.done).length;
  }

  @action
  addTodo(text) {
    const todo = {
      id: `todo${++this.seed}`,
      text,
      done: false,
    };

    this.todos.set(todo.id, todo);
  }

  @action
  setDone(id) {
    if (this.todos.has(id)) {
      this.todos.get(id).done = true;
    }
  }

  @action
  toggleDone(id, isDone) {
    if (this.todos.has(id)) {
      const todo = this.todos.get(id);
      todo.done = (typeof isDone === 'undefined' ? !todo.done : !!isDone);
    }
  }

  @action
  delete(id) {
    if (this.todos.has(id)) {
      this.todos.delete(id);
    }
  }
};
