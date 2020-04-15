import React from "react";

class Stats extends React.Component {
  render() {
    if (!this.props.todos)
      return <h3 data-testid="no-props">Nothing to display</h3>;
    //Calculated the number of completed ToDo items
    const completed = Object.keys(this.props.todos).reduce((acc, key) => {
      if (this.props.todos[key] && this.props.todos[key].complete === true) {
        return (acc += 1);
      }
      return acc;
    }, 0);
    //Calculated the number of inComplete ToDo items
    const remaining = Object.keys(this.props.todos).reduce((acc, key) => {
      if (this.props.todos[key] && this.props.todos[key].complete === false) {
        return (acc += 1);
      }
      return acc;
    }, 0);

    // Rendering the stats component
    return (
      <div className="stats">
        <div className="stats-completed card">
          <h3 data-testid="completed-title">Completed</h3>
          <p data-testid="completed-total">{completed}</p>
        </div>
        <div className="stats-remaining card">
          <h3 data-testid="remaining-title">Remaining</h3>
          <p data-testid="remaining-total">{remaining}</p>
        </div>
      </div>
    );
  }
}

export default Stats;
