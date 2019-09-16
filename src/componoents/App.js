import React from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = {
    todos: {
      todo1: {
        index: 1,
        key: 1,
        task: "Feed Kitty",
        complete: true
      },
      todo2: {
        index: 2,
        key: 2,
        task: "Play with cat",
        complete: false
      },
      todo3: {
        index: 3,
        key: 3,
        task: "Walk the cat",
        complete: false
      }
    }
  };

  updateToDo = (key, updateToDo) => {
    let todos = { ...this.state.todos };
    todos[key] = updateToDo;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="main-heading">Happy Cat To Do List</h1>
        <p className="sub-heading">Complete a to do to make the cat smile</p>

        <AddToDo />

        <ToDoList todos={this.state.todos} updateToDo={this.updateToDo} />
      </div>
    );
  }
}

export default App;
