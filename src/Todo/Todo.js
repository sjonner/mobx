import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import autobind from 'autobind-decorator';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import './Todo.css';

@inject(stores => ({todoStore: stores.store.todo}))
@observer
export default class Todo extends Component {
  render() {
    const { todoStore } = this.props;

    return (
      <form method="POST" onSubmit={this.handleSubmit}>
        <Input name="newTodo"  autoComplete="off" placeholder="add a new todo" />
        <button type="submit">add</button>

        <div>
          <small><em>double click a todo to edit</em></small><br/>
          <small><em>alt + click a todo to mark as done</em></small><br/>
        </div>

        <div className="Todo-progress">
          <div className="Todo-progress-bar" style={{width: `${todoStore.doneCount / todoStore.allTodos.length * 100}%`}} />
          <div className="Todo-progress-text">
            {this.report()}
          </div>
        </div>

        <TodoList>
          {todoStore.allTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
        </TodoList>
      </form>
    );
  }

  report() {
    const { todoStore } = this.props;
    return todoStore.openTodos.length === 0
      ? '<none>'
      : <div>
          Next todo: "{todoStore.openTodos[0].text}".
          <br/>
          <small>{`Progress: ${todoStore.doneCount}/${todoStore.allTodos.length}`}</small>
        </div>;
  }

  @autobind
  handleSubmit(event) {
    event.preventDefault();
    const text = event.target.elements.newTodo.value.trim();

    if (!text) {
      return;
    }

    this.props.todoStore.addTodo(text);
    event.target.elements.newTodo.value = '';
  }
}

const Input = styled.input`
  margin: 10px 0;
  padding: 5px;
`