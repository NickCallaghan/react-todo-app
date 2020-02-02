import React from "react";
import AddToDo from "../componoents/AddToDo";
import FilterBar from "../componoents/FilterBar";
import ToDoList from "../componoents/ToDoList";
import Stats from "../componoents/Stats";

class Main extends React.Component {
  render() {
    return (
      <div>
        <AddToDo addToDo={this.props.addToDo} />

        <FilterBar updateFilter={this.props.updateFilter} />

        <ToDoList
          filter={this.props.filter}
          todos={this.props.todos}
          updateToDo={this.props.updateToDo}
          deleteToDo={this.props.deleteToDo}
        />
        <Stats todos={this.props.todos} />
      </div>
    );
  }
}

export default Main;
