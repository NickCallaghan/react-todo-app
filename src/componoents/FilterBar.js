import React from "react";

class FilterBar extends React.Component {
  render() {
    return (
      <ul className="filter-list">
        <li className="all active">All</li>
        <li className="open">Open</li>
        <li className="completed">Completed</li>
      </ul>
    );
  }
}

export default FilterBar;
