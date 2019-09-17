import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {Object.keys(this.props.todos).map(key => {
          if (this.props.todos[key]) {
            return (
              <ToDo
                key={this.props.todos[key].index}
                todo={this.props.todos[key]}
                updateToDo={this.props.updateToDo}
                deleteToDo={this.props.deleteToDo}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
}
export default ToDoList;
