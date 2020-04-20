import React from "react";
import uuid from "uuid/v4";

class AddToDo extends React.Component {
  newTodoRef = React.createRef();

  handleAddToDo = (event) => {
    event.preventDefault();
    // Add a todo if not empty
    if (this.newTodoRef.current.value !== "") {
      const newToDo = {
        id: uuid(),
        task: this.newTodoRef.current.value,
        complete: false,
      };
      this.props.addToDo(newToDo);
      event.currentTarget.reset();
    }
  };

  render() {
    return (
      <form
        data-testid="addtodo-form"
        className="add-todo"
        onSubmit={this.handleAddToDo}
      >
        <input
          data-testid="addtodo-input"
          ref={this.newTodoRef}
          type="text"
          placeholder="Add something to do"
        />{" "}
        <button data-testid="addtodo-submit" type="submit">
          +
        </button>
      </form>
    );
  }
}

export default AddToDo;
