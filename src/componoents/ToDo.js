import React from "react";

class ToDo extends React.Component {
  handleToggleTodo = event => {
    event.preventDefault();
    const key = event.currentTarget.id;
    let updatedTodo = {
      ...this.props.todo
    };
    updatedTodo.complete = !updatedTodo.complete;
    this.props.updateToDo(key, updatedTodo);
  };

  render() {
    const { index, task, complete, key } = this.props.todo;
    return (
      <div className={`todo-item ${complete ? "checked" : "not-checked"}`}>
        <input
          type="checkbox"
          key={key}
          id={`todo${index}`}
          checked={complete}
        />
        <label
          id={`todo${index}`}
          htmlFor={`todo${index}`}
          onClick={this.handleToggleTodo}
        >
          {task}
        </label>
      </div>
    );
  }
}

export default ToDo;
