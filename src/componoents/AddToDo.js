import React from "react";

class AddToDo extends React.Component {
  newTodoRef = React.createRef();

  handleAddToDo = event => {
    event.preventDefault();
    // Add a todo if not empty
    if (this.newTodoRef.current.value !== ""){
      const key = Date.now();
      const newToDo = {
        index: key,
        key: key,
        task: this.newTodoRef.current.value,
        complete: false
      };
    
    this.props.updateToDo(key, newToDo);
    event.currentTarget.reset();
    }
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.handleAddToDo}>
        <input
          ref={this.newTodoRef}
          type="text"
          placeholder="Add something to do"
        />{" "}
        <input type="submit" value="+" />
      </form>
    );
  }
}

export default AddToDo;
