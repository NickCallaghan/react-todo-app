import React from "react";

class AddToDo extends React.Component {
  render() {
    return (
      <form className="add-todo">
        <input type="text" placeholder="Add something to do" />{" "}
        <input type="submit" value="+" />
      </form>
    );
  }
}

export default AddToDo;
