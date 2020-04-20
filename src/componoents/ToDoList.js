import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  filterTodos = (filter) => {
    // Get todos
    let todos = Object.keys(this.props.todos).map((key) => {
      return { ...this.props.todos[key] };
    });
    if (filter === "completed") {
      todos = todos.filter((todo) => todo.complete === true);
    }
    if (filter === "open") {
      todos = todos.filter((todo) => todo.complete === false);
    }
    return todos;
  };

  renderTodos = (todos) => {
    return (
      <div data-testid="todo-list" className="todo-list">
        {todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              updateToDo={this.props.updateToDo}
              deleteToDo={this.props.deleteToDo}
            />
          );
        })}
      </div>
    );
  };

  renderNoToDos = () => {
    return (
      <div data-testid="no-todos" className="no-todos">
        Nothing to do!
      </div>
    );
  };

  render() {
    const todos = this.filterTodos(this.props.filter);
    return todos.length ? this.renderTodos(todos) : this.renderNoToDos();
  }
}
export default ToDoList;
