import React from "react";

class ToDo extends React.Component {
  handleToggleTodo = (event) => {
    event.preventDefault();
    const updatedTodo = this.props.todo;
    const id = this.props.todo.id;
    updatedTodo.complete = !updatedTodo.complete;
    this.props.updateToDo(id, updatedTodo);
  };

  handleDeleteToDo = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const todo = event.currentTarget;
    this.props.deleteToDo(id);
  };

  render() {
    const { id, task, complete } = this.props.todo;
    return (
      <div className={`todo-item ${complete ? "checked" : "not-checked"}`}>
        <input
          data-testid="todo-checkbox"
          type="checkbox"
          key={`${id}`}
          id={`${id}`}
          checked={complete}
          onChange={this.handleToggleTodo}
        />
        <label
          data-testid="todo-label"
          id={`${id}`}
          htmlFor={`${id}`}
          onClick={this.handleToggleTodo}
        >
          {task}
        </label>
        <span
          data-testid="todo-remove-button"
          id={`${id}`}
          className="remove-todo"
          onClick={this.handleDeleteToDo}
        >
          X
        </span>
      </div>
    );
  }
}

export default ToDo;
