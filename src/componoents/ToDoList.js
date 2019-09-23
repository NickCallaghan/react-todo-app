import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  
  filterTodos = (filter) => {
    console.log(filter);
    // Get todos
    let todos = Object.keys(this.props.todos).map(key =>{
      return {...this.props.todos[key]};
    });
    if (filter === "completed"){
      todos = todos.filter(todo => todo.complete === true);
    }
    if (filter === "open"){
      todos = todos.filter(todo => todo.complete === false);
    }
    return todos;
  }
  
  render() {
    const todos = this.filterTodos(this.props.filter);
    return (
      <div className="todo-list">
        {todos.map(todo => {
            return (
              <ToDo
                key={todo.index}
                todo={todo}
                updateToDo={this.props.updateToDo}
                deleteToDo={this.props.deleteToDo}
              />
            );
          }
        )}
      </div>
    );
  }
}
export default ToDoList;
