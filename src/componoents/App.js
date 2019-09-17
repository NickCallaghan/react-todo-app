import React from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import Stats from "./Stats";

class App extends React.Component {
  state = {
    todos: {
      1: {
        index: 1,
        key: 1,
        task: "Feed the cat",
        complete: false
      },
      2: {
        index: 2,
        key: 2,
        task: "Walk the cat",
        complete: false
      },
      3: {
        index: 3,
        key: 3,
        task: "Play with the cat",
        complete: false
      }
    }
  };

  updateToDo = (key, updateToDo) => {
    let todos = { ...this.state.todos };
    todos[key] = updateToDo || undefined;
    this.setState({ todos });
  };

  deleteToDo = key => {
    let todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="main-heading">Happy Cat To Do List</h1>
        <p className="sub-heading">Complete a to do to make the cat smile</p>

        <AddToDo updateToDo={this.updateToDo} />

        <ToDoList
          todos={this.state.todos}
          updateToDo={this.updateToDo}
          deleteToDo={this.deleteToDo}
        />
        <Stats todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
