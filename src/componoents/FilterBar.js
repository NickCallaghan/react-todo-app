import React from "react";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
    this.all = React.createRef();
    this.open = React.createRef();
    this.completed = React.createRef();
  }
  changeActiveFilter = (e) => {
    // Get node list for filter options and untoggle active class
    const listNodes = this.list.current.childNodes;
    listNodes.forEach((node) => {
      if (node.classList.contains("active")) {
        node.classList.toggle("active");
      }
    });
    //Get filter for clicked link and set state for clicked link
    const updatedFilter = e.currentTarget.classList[0];
    this.props.updateFilter(updatedFilter);
    // Toggle active for the event target
    e.currentTarget.classList.toggle("active");
  };

  render() {
    return (
      <ul className="filter-list" ref={this.list}>
        <li
          data-testid="filter-all"
          ref={this.all}
          className="all active"
          onClick={this.changeActiveFilter}
        >
          All
        </li>
        <li
          data-testid="filter-open"
          ref={this.open}
          className="open"
          onClick={this.changeActiveFilter}
        >
          Open
        </li>
        <li
          data-testid="filter-completed"
          ref={this.completed}
          className="completed"
          onClick={this.changeActiveFilter}
        >
          Completed
        </li>
      </ul>
    );
  }
}

export default FilterBar;
