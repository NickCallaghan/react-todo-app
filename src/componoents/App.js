import React from "react";
import Main from "../pages/Main";
import uuid from "uuid/v4";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid(),
          task: "Feed the cat",
          complete: false
        },
        {
          id: uuid(),
          task: "Play with the cat",
          complete: false
        },
        {
          id: uuid(),
          task: "Change Kittie Litter",
          complete: false
        }
      ],
      filter: "all"
    };
  }

  addToDo = newTodo => {
    console.log(newTodo);
    this.setState(st => ({ todos: [...st.todos, newTodo] }));
  };

  updateToDo = (id, updateToDo) => {
    let todos = this.state.todos.map(td => {
      if (td.id === id) {
        return updateToDo;
      }
      return td;
    });
    this.setState({ todos });
  };

  deleteToDo = id => {
    let todos = [...this.state.todos];
    todos = todos.filter(td => td.id !== id);
    this.setState({ todos });
  };

  updateFilter = newFilter => {
    const updatedFilter = newFilter;
    this.setState({ filter: updatedFilter });
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="main-heading">Happy Cat To Do List</h1>
        <p className="sub-heading">Happy cats mean completed todos</p>
        <Main
          filter={this.state.filter}
          todos={this.state.todos}
          addToDo={this.addToDo}
          updateToDo={this.updateToDo}
          deleteToDo={this.deleteToDo}
          updateFilter={this.updateFilter}
        />
      </div>
    );
  }
}

export default App;
